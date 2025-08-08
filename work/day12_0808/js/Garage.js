import Car from "./Car"

function Garage() {
    return (
        <>
            <h1>내 차고에는 어떤 차가 있을까?</h1>
            <Car color="red" />
            <Car blue="blue" />
            <Car color="green" />
        </>
    )
}

export default Garage