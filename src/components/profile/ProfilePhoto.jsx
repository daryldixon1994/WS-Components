import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProfilePhoto() {
  return (
    <div className="photo">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://scontent.ftun18-1.fna.fbcdn.net/v/t1.15752-9/315957576_447045937621919_2129367247085241722_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JwJiqKxDvkAAX-umVSH&_nc_ht=scontent.ftun18-1.fna&oh=03_AdQJTxLANJ8XXD-qp83V2_gjY8Jh9VrA6hhafirB3j-6ag&oe=63AF0E71"
        />
        <Card.Body>
          <Card.Title>Heyy My Friends !!</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfilePhoto