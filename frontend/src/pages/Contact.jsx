import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
    status: null,
    errors: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

if (!formState.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (/[^a-zA-Z\s]/.test(formState.name)) {
      errors.name = "Name should not contain numbers or special characters";
      isValid = false;
    }


    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formState.contactNo)) {
      errors.contactNo = "Contact number must be a 10-digit number";
      isValid = false;
    }

    setFormState((prev) => ({ ...prev, errors }));
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post("https://formspree.io/f/mvgpyeov", formState);
      console.log(response);
      if (response.data.ok) {
        toast.success("Thanks for joining!");
        setFormState({
          name: "",
          email: "",
          contactNo: "",
          message: "",
          status: "success",
          errors: {},
        });
      } else {
        toast.error("Something went wrong. Please try again.")
        setFormState((prev) => ({ ...prev, status: "error" }));
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
      setFormState((prev) => ({ ...prev, status: "error" }));
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            padding: 20,
            maxWidth: "750px",
            margin: "auto",
            color: "white",
          }}
        >
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formState.name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                borderRadius: 10,
                color: "white",
                borderColor: "rgb(88, 250, 0)",
                height: "60px",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
              },
            }}
            helperText={formState.errors.name}
            error={Boolean(formState.errors.name)}
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formState.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                borderRadius: 10,
                color: "white",
                borderColor: "rgb(88, 250, 0)",
                height: "60px",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  color: "white",
                  borderColor: "rgb(88, 250, 0);",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(88, 250, 0);",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(88, 250, 0);",
                },
              },
            }}
          />

          <TextField
            name="contactNo"
            label="Contact No."
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formState.contactNo}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                borderRadius: 10,
                color: "white",
                borderColor: "rgb(88, 250, 0)",
                height: "60px",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
              },
            }}
            helperText={formState.errors.contactNo}
            error={Boolean(formState.errors.contactNo)}
          />

          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            value={formState.message}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                borderRadius: 10,
                color: "white",
                borderColor: "rgb(88, 250, 0)",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(88, 250, 0)",
                },
              },
            }}
          />

          <Button
            variant="outlined"
            type="submit"
            color="primary"
            sx={{
              marginTop: "16px",
              marginBottom: "80px",
              borderRadius: "50px",
              height: "40px",
              letterSpacing: 3,
              borderColor: "rgb(88, 250, 0)",
            }}
          >
            Send Message
          </Button>

        
        </form>
      </div>
    </>
  );
};

export default Contact;
