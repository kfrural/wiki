import React from "react";
import './ItemRepo.css';

function ItemRepo(repos){

    return(
        <div>
            <h3>
                {repos.name}
            </h3>
            <p>
                {repos.full_name}
            </p>
            <a href={repos.html_url} target="blank">
                Ver repositório
            </a>
            <br></br>
            <a href="#" className="remover">
                Remover
            </a>
            <hr/>
        </div>
    )
}

export default ItemRepo;