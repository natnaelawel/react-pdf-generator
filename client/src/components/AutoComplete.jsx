import React, { useState, useEffect, useRef, useMemo } from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
// import useAutocomplete from "@material-ui/lab/useAutocomplete";

function AutoCompleteInput(props) {
  const [data, setData] = useState(props);
  return useMemo(() => {
    console.log("props is ", props);
    let types = [];
    if (props.type === "skill") {
      types = [
        { title: "Web Design " },
        { title: "web developer" },
        { title: "computer science" },
        { title: "Project Direction" },
        { title: "software engineering" },
        { title: "mobile app developer" },
        { title: "data scientist" },
        { title: "Interface Design" },
      ];
    } else if (props.type === "education") {
      types = [
        { title: "BSC " },
        { title: "BA" },
        { title: "MS" },
        { title: "MSC" },
      ];
    } else {
      types = [
        { title: "Senior Interface Designer" },
        { title: "Junior Interface Designer" },
        { title: "data analyst" },
        { title: "data analyst" },
      ];
    }
    const handleChange = (values) => {
      if (props.type === "skill") {
        const skills = values.map((value) => {
          return { title: value };
        });
        props.getSelectedSkills(skills);
      } else if (props.type === "experience") {
        const experiences = values.map((experience) => {
          return {
            company: "Facebook",
            duration: "2005-2007",
            job_title: experience,
            detail: `Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual
              paradigms and top-line convergence.`,
          };
        });
        props.getSelectedExperience(experiences);
      } else {
        const educations = values.map((education) => {
          return {
            institution: [
              "Addis Ababa Univeristy",
              "Hawassa University",
              "Jimma University",
            ][Math.floor(Math.random()) * 3],
            qualifaction: education,
            detail:
              "Dual Major, Economics and English &mdash; <strong>4.0 GPA</strong>",
          };
        });
        props.getSelectedEducation(educations);
      }
      return true;
    };

    const dataType = (data) => {
      switch (data) {
        case "skill":
          return "skills";
        case "experience":
          return "experience";
        case "education":
          return "education";
          break;

        default:
          break;
      }
    };
    return (
      <div>
        <Autocomplete
          multiple
          id="tags-filled"
          options={types?.map((option) => option.title)}
          freeSolo
          renderTags={(value, getTagProps) =>
            handleChange(value) &&
            value?.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label={dataType(props.type)}
              placeholder={dataType(props.type)}
            />
          )}
        />
      </div>
    );
  }, [data]);
}
export default AutoCompleteInput;
