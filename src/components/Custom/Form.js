import React from "react";

const Form = ({handleCity, handleSearchWeather}) => {

return(

    <form className="flex justify-center text-text pt-10 focus:border-none" action="" onSubmit={e => handleSearchWeather(e)}>
    <input type="text" required="required" placeholder="Nombre de tu ciudad/país" className="p-1 rounded-l my-4 focus:bg-whiteAplha text-white font-semibold "
    onChange={({target})=>handleCity(target)}/>
    <input type="submit" value="Buscar" className="rounded-r my-4 text-black p-2" ></input>
    </form>

);

}
export default Form;