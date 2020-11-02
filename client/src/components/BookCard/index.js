import React from "react";

function BookCard({ icon, title, children }) {
    return (
        <Container fluid>
            <div className="card mt-4">
                <div className="card-header">
                    <h3>
                        <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}

                    </h3>
                </div>
                <div className="card-body">{children}</div>
            </div>
        </Container>
    );
}

export default BookCard;