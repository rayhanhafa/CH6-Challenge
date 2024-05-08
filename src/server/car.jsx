import { createContext, useReducer } from "react"
import PropTypes from 'prop-types';

function carReducer(state, action) {
    if (action.type === "GET_CARS") {
        return {
            ...state,
            cars: action.payload,
        }
    }
    return state
}

export const CarContext = createContext({
    cars: [],
    getCars: () => { }
})

export const CarContextProvider = ({ children }) => {
    const [carState, carDispatch] = useReducer(carReducer, {
        cars: []
    })

    const getCars = async () => {
        try {
            const response = await fetch(
                `https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`
            );
            const responseJson = await response.json()
            carDispatch({ type: "GET_CARS", payload: responseJson })
        } catch (error) {
            // Handle error, for example:
            console.error("Error fetching cars:", error.message);
            // You can also return the error message if needed:
            // return error.message
        }
    }

    const ctxValue = {
        cars: carState.cars,
        getCars
    }

    return (
        <CarContext.Provider value={ctxValue}>{children}</CarContext.Provider>
    )
}

CarContextProvider.propTypes = {
    children: PropTypes.node.isRequired // Change to PropTypes.node
}
