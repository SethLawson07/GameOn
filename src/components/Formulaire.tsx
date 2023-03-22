import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Formulaire() {

    const [nom, setNom] = useState("John");
    const [prenom, setPrenom] = useState("Doe");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [nb, setNb] = useState("");

    const [show, setShow] = useState(false);
    const handleShow = () =>  setShow(true);
    const handleClose = () => setShow(false);

    const [validated, setValidated] = useState(false);

    const checkEmail = (event:any) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        event.preventDefault();
        event.stopPropagation();
       // setValidated(false)
        return false;
        alert("Veuillez entrer un email valide");
      }else{
       // setValidated(true);
          return true;
      }
    }
   
    const handleSubmit = (event:any) => {
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      
      setValidated(true);
      checkEmail(event)
      
  
    };


  

  return (
    <>
     
         {!show && 
           <Form noValidate validated={validated} onSubmit={handleSubmit}>
           <Form.Group className="mb-2" controlId="validationCustom01">
             <Form.Label>Prénom</Form.Label>
             <Form.Control
               type="text"
               required
               minLength={3}
               placeholder="John"
               autoFocus
               onChange={(e) => setPrenom(e.target.value)} 
               value={prenom}
             />
            <Form.Control.Feedback type="invalid"> Le prénom doit contenir au moins 3 caractères</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Label>Nom</Form.Label>
             <Form.Control
               type="text"
               placeholder="Doe"
               required
               minLength={3}
               onChange={(e) => setNom(e.target.value)} 
               value={nom}
              
             />
            <Form.Control.Feedback type="invalid"> Le nom doit contenir au moins 3 caractères</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Label>Email address</Form.Label>
             <Form.Control
               type="email"
               required
               placeholder="johndoe@example.com"
               onChange={(e) => setEmail(e.target.value)} 
               value={email}
             />
            <Form.Control.Feedback type="invalid"> Email incorrect</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Label>Date de naissance</Form.Label>
             <Form.Control
               type="date"
               required
               onChange={(e) => setBirthday(e.target.value)} 
               value={birthday}
             />
              <Form.Control.Feedback type="invalid"> Date de naissance non valide</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Label>A combien de tournoi Gameon avez vous participé ?</Form.Label>
             <Form.Control
               type="number"
                required
                min={0}
                onChange={(e) => setNb(e.target.value)} 
               value={nb}
              
             />
            <Form.Control.Feedback type="invalid"> Nombre de participation non valide</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Label>A quel tournoi souhaitez-vous participé cette année participé ?</Form.Label>
             
             {[ 'radio'].map((type) => (
             <div key={`inline-${type}`} className="mb-2">
               <Form.Check
                 inline
                 label="New York"
                 name="group1"
                 type={type}
                 id={`inline-${type}-1`}
               />
               <Form.Check
                 inline
                 label="San Fransisco"
                 name="group1"
                 type={type}
                 id={`inline-${type}-2`}
               />
               <Form.Check
                 inline
                 label="Seattle"
                 type={type}
                 id={`inline-${type}-3`}
               />
                <Form.Check
                 inline
                 label="Chicago"
                 name="group1"
                 type={type}
                 id={`inline-${type}-1`}
               />
                <Form.Check
                 inline
                 label="Boston"
                 name="group1"
                 type={type}
                 id={`inline-${type}-1`}
               />
                <Form.Check
                 inline
                 label="Portland"
                 name="group1"
                 type={type}
                 id={`inline-${type}-1`}
               />
             </div>
     ))}
           </Form.Group>

           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Check 
                defaultChecked  
                aria-label="option 1" 
                required
                label="J'ai lu et acceptés les conditions d'utilisations" 
                 />
             <Form.Control.Feedback type="invalid"> Les conditions d'utilisations doivent être accéptées</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Label></Form.Label>
             <Form.Check   aria-label="option 1" label="Je souhaite être prevenue des prochains evèvements" />
             <Form.Control.Feedback type="invalid"> Nombre non valide</Form.Control.Feedback>
           </Form.Group><br/>

           <div className="d-flex justify-content-center">           
             <Button type="submit" variant="danger" className="fs-5" >
                C'est parti
              </Button>
           </div>
         </Form>
         }

         {
            show && <div><p className='fs-3 text-center'>Merci pour votre inscirption</p></div>
         }
      
    </>
  );
}

