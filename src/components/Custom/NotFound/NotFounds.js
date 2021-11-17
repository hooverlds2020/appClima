// import react from "react";
// import logo1 from "../../../assets/svg/initiation/initiation1.svg"
// import logo2 from "../../../assets/svg/initiation/initiation2.svg"


const NotFounds = () =>{


    return(
        // <div className="text-center mt-0 flex-col">
        //     <img className="object-none object-right h-40 w-full" src={logo1} alt="weather"/>
        //     <h2 className="text-5xl mx-12 mb-8 font-bold text-text">city ​​not <span className="text-yellow">found</span></h2>
        //     <p className="mx-12 text-text">It's a pleasure  to keep track of the weather with the new app</p>
        //     <img className="object-none object-left h-40 w-full" src={logo2} alt="weather"/>
        // </div>
        <div className="text-center flex-col">
            <i className="fas fa-cloud-sun-rain fa-5x text-white text-opacity-60 hover:text-yellow-500   object-none object-center h-20 w-full mb-3"></i>
            <h4 className="text-3xl mx-12 mb-8 font-bold text-pink-500"><span className="text-white">Busca</span> el clima de tu ciudad!</h4>
            <p className="mx-12 text-white ">¡Qué no te sorprenda el clima, consulta!</p>
            <i className="fas fa-umbrella fa-3x text-black text-opacity-90 object-none object-center h-20 w-full mt-3 mb-3"></i>
        </div>

    )
}

export default NotFounds;