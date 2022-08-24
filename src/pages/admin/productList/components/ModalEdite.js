import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import CkEditor from "./CkEditor";

export default function EditModal({ show, handleClose, handleExit }) {
  //   const handleClose = () => setShow(false);

  let loadFile = (event) => {
    let image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <>
      <Button variant="primary" onClick={show}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="was-validated">
            <Form.Group className="mb-3">
              <Form.Label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                تصویر کالا
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="name@example.com"
                dir="ltr"
                accept="image/*"
                onChange={(event) => loadFile(event)}
                autoFocus
                className="custom-file-input"
                id="validatedCustomFile"
                required
              />
              <div class="invalid-feedback">عکس انتخاب کنید</div>
              <p>
                <img
                  id="output"
                  alt=""
                  style={{ width: "200px" }}
                  className="rounded-circle"
                />
              </p>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                نام کالا
              </Form.Label>
              <Form.Control
                type="text"
                accept="image/*"
                onChange={(event) => loadFile(event)}
                autoFocus
                className="custom-file-input"
                id="validatedCustomFile"
                required
              />
              <div class="invalid-feedback"> نام کالا را وارد کنید</div>
              <p>
                <img id="output" alt="" style={{ width: "200px" }} />
              </p>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>دسته بندی</Form.Label>
              <br />
              <select className="custom-select rounded col-12" required>
                <option value="">انتخاب کنید</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="invalid-feedback">دسته بندی رو مشخص کنید</div>
              <br />

              {/* <Form.Control as="textarea" rows={3} /> */}
            </Form.Group>
            <Form.Group>
              <Form.Label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                توضیحات
              </Form.Label>
              <CkEditor />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
