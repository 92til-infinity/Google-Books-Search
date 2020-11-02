import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h3 className="font-italic">{title}</h3>
                    {subtitle && <h5 className="font-italic">{subtitle}</h5>}
                </Col>
                <Col size="md-4">
                </Col>
            </Row>
        </ListItem>
    )

}   