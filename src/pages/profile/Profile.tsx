import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  InputField,
  SubmitButton,
  MessageDisplay,
  MessageDisplayType,
  SUCCESS_MESSAGE,
  FAIL_MESSAGE
} from "../../components";
import { missingFields, profileUpdated } from "../../messages";

export function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [message, setMessage] = useState<MessageDisplayType>({
    text: "",
    type: SUCCESS_MESSAGE
  });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email === "" || name === "") {
      setMessage({ text: missingFields, type: FAIL_MESSAGE });
    } else {
      // updateProfile();
      setMessage({ text: profileUpdated, type: FAIL_MESSAGE });
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={4}>
            <InputField
              fieldName='Name'
              fieldValue={name}
              onChange={handleName}
            />
          </Grid>
          <Grid item xs={4}>
            <InputField
              fieldName='Email'
              fieldValue={email}
              onChange={handleEmail}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={4}>
          <InputField fieldName='Age' fieldValue={age} onChange={handleAge} />
        </Grid>
        <Grid item xs={4}>
          <InputField
            fieldName='Phone'
            fieldValue={phone}
            onChange={handlePhone}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={4}>
          <InputField
            fieldName='Gender'
            fieldValue={gender}
            onChange={handleGender}
          />
        </Grid>
        <Grid item xs={4}>
          <InputField
            fieldName='Plan'
            fieldValue={email}
            onChange={handleEmail}
          />
        </Grid>
      </Grid>
      <MessageDisplay text={message.text} type={message.type} />
      <SubmitButton onClick={handleSubmit} className='btn' type='submit'>
        Submit Changes
      </SubmitButton>
    </div>
  );
}
