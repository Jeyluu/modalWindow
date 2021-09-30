import React, {useState} from 'react';
import "./Modal.css";

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>

            
            {modal && (
            <div className="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <h2>C'est une fenêtre modale</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem vero dignissimos eum perferendis omnis, totam incidunt cumque, nobis autem dolor excepturi animi esse! Perferendis blanditiis eaque laboriosam assumenda neque officiis est, ea, vero fuga veritatis minus dolor facere itaque cum at adipisci voluptatibus! Illum distinctio maiores vero optio perspiciatis.</p>
                        <button onClick={toggleModal} className="close-modal">Close</button>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}
