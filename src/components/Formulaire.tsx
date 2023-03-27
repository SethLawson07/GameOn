import React, { useState } from 'react';
import {Button,Form,Container,Row,Col} from 'react-bootstrap';

export default function Formulaire({handleCloseModal}:any) {

    const cities = ["New York", "San Francisco", "Seattle", "Chicago", "Boston", "Portland"];

    const [nom, setNom] = useState<string>("");
    const [prenom, setPrenom] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [dateNaissance, setDateNaissance] = useState<string>("");
    const [number, setNumber] = useState<number>();
    const [ville, setVille] = useState<string>("");
    const [acceptConditions, setAcceptConditions] = useState<boolean>(true);
    const [beNotified, setBeNotified] = useState<boolean>(false);
    const [show, setShow] = useState(false);

    const [validated, setValidated] = useState<boolean>(false);

    /**
     * Sets the data entered by the user in the form to their respective state variables.
     *   @returns {void}
     */
    const setData = ():void => {

      setPrenom(prenom);
      setNom(nom);
      setEmail(email);
      setDateNaissance(dateNaissance);
      setNumber(number);
      setVille(ville);
      setAcceptConditions(acceptConditions);
      setBeNotified(beNotified);
      
    }

    /**
     * Handles the submission of a form event and performs form validation.
     * @param {Event} event - The event object representing the form submission.
     * @returns {void}
     */
     const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        event.stopPropagation();
      
        const form = event.currentTarget;
        const isValid = form.checkValidity();
      
        setValidated(true);
      
        if (isValid) {
          setShow(true);
          setData();
        }
    };
    

  return (
    <>
     
         {!show && 
           <Form noValidate validated={validated} onSubmit={handleSubmit} >
           <Form.Group className="mb-2" controlId="validationCustom01">
             <Form.Label>Prénom</Form.Label>
             <Form.Control
               type="text"
               required
               placeholder="John"
               autoFocus
               pattern="^[a-zA-Z]{3,}$"
               onChange={(e) => setPrenom(e.target.value)} 
               value={prenom}
             />
            <Form.Control.Feedback type="invalid"> Le prénom doit contenir au moins 3 caractères et pas de chiffres</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2" controlId="validationCustom02">
             <Form.Label>Nom</Form.Label>
             <Form.Control
               type="text"
               placeholder="Doe"
               required
               pattern="^[a-zA-Z]{3,}$"
               onChange={(e) => setNom(e.target.value)} 
               value={nom}
            
             />
            <Form.Control.Feedback type="invalid"> Le nom doit contenir au moins 3 caractères et pas de chiffres</Form.Control.Feedback>
            
           </Form.Group>

           <Form.Group className="mb-2" controlId="validationCustom03">
             <Form.Label>Email address</Form.Label>
             <Form.Control
               type="email"
               required
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
               max="2011-03-31"
               onChange={(e) => setDateNaissance(e.target.value)} 
               value={dateNaissance}
             />
              <Form.Control.Feedback type="invalid"> Date de naissance non valide,
              Les compétitions de jeux vidéo offrant des récompenses monétaires sont interdites aux mineurs de moins de 12 ans.
              </Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2 " controlId="exampleForm.ControlInput1">
             <Form.Label>A combien de tournoi Gameon avez vous participé ?</Form.Label>
             <Form.Control
               type="number"
                required
                min={0}
                pattern="^[0-9]+([.][0-9]+)?$"
                onChange={(e) => setNumber(parseInt(e.target.value))} 
                value={number} 
             />
            <Form.Control.Feedback type="invalid"> Nombre de participation non valide</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
           <Form.Label>A quel tournoi souhaitez-vous participer cette année ?</Form.Label>

            {cities.map((city, index) => (
              <Form.Check
                key={index}
                inline
                required
                label={city}
                name="group1"
                type="radio"
                id={`inline-radio-${index}`}
                onChange={(e) => setVille(city)} 
                value={ville} 
              />
            ))}
          </Form.Group>


           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Check 
                defaultChecked  
                aria-label="option 1" 
                required
                label="J'ai lu et acceptés les conditions d'utilisations" 
                onChange={(e) => setAcceptConditions(e.target.checked)} 
                checked={acceptConditions} 
                 />
             <Form.Control.Feedback type="invalid"> Les conditions d'utilisations doivent être accéptées</Form.Control.Feedback>
           </Form.Group>

           <Form.Group className="mb-2 " controlId="exampleForm.ControlInput1">
             <Form.Label></Form.Label>
             <Form.Check 
                aria-label="option 1" 
                label="Je souhaite être prevenue des prochains evèvements" 
                onChange={(e) => setBeNotified(e.target.checked)} 
                checked={beNotified} 
              />
             
           </Form.Group>
          
           <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Button type="submit" variant="danger" className="fs-5 my-3 w-100">
                C'est parti
              </Button>
            </Col>
          </Row>
         </Form>
         }

         {
            show && <Container className="fs-5 ">
            <Row>
              <Col>
                <p>Nom : {nom}</p>
                <p>Prénoms : {prenom}</p>
                <p>Adresse mail : {email}</p>
                <p>Date de naissance : {dateNaissance}</p>
                <p>Nombre de participation : {number}</p>
                <p>Ville : {ville}</p>
                <p>Conditions d'utilisation : Accepté</p>
                <p className="fs-6">
                  Je souhaite être prévenu des prochains événements :{" "}
                  {beNotified ? "Accepté" : "Refusé"}
                </p>
                <p className="fs-3 fw-bold text-secondary text-center">Merci pour votre inscription</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-grid gap-2">
                  <Button variant="danger" size="lg" onClick={handleCloseModal}>
                    Fermer
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
         }
      
    </>
  );
}

