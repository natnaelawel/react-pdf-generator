import React, { useState } from "react";
import "./App.css";
import AutoCompleteInput from "./components/AutoComplete";
import {
  TextField,
  FormControl,
  FormGroup,
  Button,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { saveAs } from "file-saver";

function App() {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [profession, setProfession] = useState([]);
  const [profile, setProfile] = useState([]);
  const [education, setEducation] = useState([]);

  const getSelectedSkills = (skill) => {
    setSkills(skill);
  };
  const getSelectedExperience = (experience) => {
    setExperiences(experience);
  };
  const getSelectedEducation = (edu) => {
    setEducation(edu);
  };

  const submit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      image:
        "https://cssauthor.com/wp-content/uploads/2019/08/Rezyme-Resume-Template.jpg",
      phone,
      profession,
      profile,
      experiences,
      education,
      skills,
      website: "www.google.com",
    };
    console.log("submited data is ", data);
    axios
      .post("/create-pdf", data)
      .then((res) => {
          axios.get("/fetch-pdf", { responseType: "blob" })
          .then(res => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, "my-cv.pdf");
          })
          .catch(err => console.log(err))
        })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <form method="post">
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" color="primary">
              Create your CV
            </Typography>
          </Grid>
          <Grid container item md={8} spacing={3}>
            <Grid item xs={6}>
              <FormGroup className="form-group">
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    value={name}
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup className="form-group">
                <FormControl>
                  <TextField
                    id="outlined-email"
                    label="Email"
                    type="email"
                    value={email}
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container item md={8} spacing={3}>
            <Grid item xs={6}>
              <FormGroup className="form-group">
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Profession"
                    variant="outlined"
                    type="text"
                    value={profession}
                    multiline
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup className="form-group">
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Profile"
                    variant="outlined"
                    type="text"
                    multiline
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container item md={8} spacing={3}>
            <Grid item xs={6}>
              <FormGroup className="form-group">
                <FormControl>
                  <TextField
                    id="outlined-number"
                    label="Phone"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    variant="outlined"
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup className="form-group key_skills">
                <FormControl>
                  <AutoCompleteInput
                    type="skill"
                    getSelectedSkills={getSelectedSkills}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container item md={8} spacing={3}>
            <Grid item xs={6}>
              <FormGroup className="form-group work_experience">
                <FormControl>
                  <AutoCompleteInput
                    type="experience"
                    getSelectedExperience={getSelectedExperience}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup className="form-group education">
                <FormControl>
                  <AutoCompleteInput
                    type="education"
                    getSelectedEducation={getSelectedEducation}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>

          <Grid container item md={8} spacing={3}>
            <Grid item xs={6}>
              <FormGroup className="form-group image">
                <FormControl>
                  <Grid container justify="space-between" item>
                    <Grid item md={4}>
                      <Typography variant="h5">
                        Profile Image
                      </Typography>
                    </Grid>
                    <Grid item md={3}>
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                        >
                          Upload
                        </Button>
                      </label>
                    </Grid>
                  </Grid>
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>

          <Grid container item md={8} spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                onClick={submit}
                href="#contained-buttons"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default App;
