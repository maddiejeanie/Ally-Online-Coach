import { React, useState } from "react";
import {
  FormControlLabel,
  Grid,
  Paper,
  Slider,
  Switch,
  TextField,
  CssBaseline,
  OutlinedInput,
  Checkbox,
  InputAdornment,
  Button,
} from "@mui/material";

import {
  sleepFactors,
  stressFactors,
  lowEnergyFactors,
  nutritionChallenges,
} from "./CheckboxData";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#667EEA", // Indigo-300
    },
    secondary: {
      main: "#3B82F6", // Indigo-500
    },
    background: {
      default: "rgb(224, 231, 255)", // Set the default background color
    },
  },

  typography: {
    fontFamily: [
      "Inclusive Sans", // Your desired font
      "serif", // Generic serif font
      "Arial",
    ].join(","),
  },
});

const Form = () => {
  const [formData, setFormData] = useState({
    CheckinWeight: 0,
    SleepQualityRating: 5,
    HoursOfSleep: 0,
    sleepFactors: {},
    StressLevels: 5,
    stressFactors: {},
    EnergyLevels: 5,
    lowEnergyFactors: {},
    nutritionChallenges: {},
    NutritionCompliance: 5,
    TrainingIntensity: 5,
    StepTarget: 0,
    TrainingProgressions: "",
    TrainingCompliance: 5,
    SocialInteraction: false,
    Gratitude: "",
    WeekRating: 5,
    Goals: "",
    CommentsorHelp: "",
    submissionTime: null,
  });
  const [submissionTime, setSubmissionTime] = useState(null);
  const [formVisible, setFormVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date();
    setSubmissionTime(currentTime);

    setFormData((prevData) => ({
      ...prevData,
      submissionTime: currentTime,
    }));

    console.log(formData);
    setFormVisible(false);
  };

  
  const handleInputChange = (e, category) => {
    const { name, checked, value, type } = e.target;
  
    setFormData((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          [category]: {
            ...prevData[category],
            [name]: checked,
          },
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };
  

  
  const generateGridItem = (children) => (
    <Grid item xs={12}>
      <Paper elevation={4} style={{ padding: "20px" }}>
        {children}
      </Paper>
    </Grid>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

        {formVisible && (
          <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={4} style={{ marginBottom: "1rem" }}>
              <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-indigo-500">
                Body Stats and Sleep
              </h2>

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Body weight this morning (weighed upon waking, before
                    eating)?
                  </h3>
                  <OutlinedInput
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    min={1}
                    inputProps={{
                      "aria-label": "weight",
                    }}
                    /* required */
                    name="CheckinWeight"
                    value={formData.CheckinWeight}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Rate your sleep quality for the week (1 being lowest, 10
                    being highest)?
                  </h3>
                  <Slider
                    style={{ margin: "40px 0 0 0" }}
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="on"
                    step={1}
                    marks
                    min={1}
                    max={10}
                    /* required */
                    name="SleepQualityRating"
                    value={formData.SleepQualityRating}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Average hours of sleep per night?
                  </h3>
                  <OutlinedInput
                    type="number"
                    min={1}
                    max={12}
                    step={1}
                    endAdornment={
                      <InputAdornment position="end">hours</InputAdornment>
                    }
                    /* required */
                    name="HoursOfSleep"
                    value={formData.HoursOfSleep}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Reasons for poor sleep, if applicable?
                  </h3>
                  <Grid container spacing={1}>
                    {sleepFactors.map((factor, index) => (
                      <Grid item xs={6} key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                            type="checkbox"
                              checked={formData.sleepFactors[factor] || false}
                              onChange={(e) =>
                                handleInputChange(e, "sleepFactors")
                              }
                              name={factor}
                            />
                          }
                          label={factor}
                          style={{ display: "flex", alignItems: "center" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}

              <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-indigo-500">
                Stress and Energy
              </h2>

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    How would you rate your stress levels for the week?
                  </h3>
                  <Slider
                    style={{ margin: "40px 0 0 0" }}
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                    /* required */
                    name="StressLevels"
                    value={formData.StressLevels}
                    onChange={handleInputChange}
                  />
                </>
              )}
              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Reasons for increased stress, if applicable?
                  </h3>
                  <Grid container spacing={1}>
                    {stressFactors.map((factor, index) => (
                      <Grid item xs={6} key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                            type="checkbox"

                              checked={formData.stressFactors[factor] || false}
                              onChange={(e) =>
                                handleInputChange(e, "stressFactors")
                              }
                              name={factor}
                            />
                          }
                          label={factor}
                          style={{ display: "flex", alignItems: "center" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    How would you rate your energy levels for the week?
                  </h3>
                  <Slider
                    style={{ margin: "40px 0 0 0" }}
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                    /* required */
                    name="EnergyLevels"
                    value={formData.EnergyLevels}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Reasons for low levels of energy, if applicable?
                  </h3>
                  <Grid container spacing={1}>
                    {lowEnergyFactors.map((factor, index) => (
                      <Grid item xs={6} key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                            type="checkbox"

                              checked={formData.lowEnergyFactors[factor] || false}
                              onChange={(e) =>
                                handleInputChange(e, "lowEnergyFactors")
                              }
                              name={factor}
                            />
                          }
                          label={factor}
                          style={{ display: "flex", alignItems: "center" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}

              <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-indigo-500">
                Nutrition and Training
              </h2>

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Challenges in Nutrition Plan:
                  </h3>
                  <Grid container spacing={1}>
                    {nutritionChallenges.map((factor, index) => (
                      <Grid item xs={6} key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                          type="checkbox"

                            checked={formData.nutritionChallenges[factor] || false}
                            onChange={(e) =>
                              handleInputChange(e, "nutritionChallenges")
                            }
                            name={factor}
                          />
                        }
                        label={factor}
                        style={{ display: "flex", alignItems: "center" }}
                      />
                    </Grid>
                    ))}
                  </Grid>
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Rate Nutrition Plan Compliance?
                  </h3>
                  <Slider
                    style={{ margin: "40px 0 0 0" }}
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                    /* required */
                    name="NutritionComplicance"
                    value={formData.NutritionComplicance}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Training sessions complete?
                  </h3>
                  <FormControlLabel control={<Switch />} />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">Training Intensity:</h3>
                  <Slider
                    style={{ margin: "40px 0 0 0" }}
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                    /* required */
                    name="TrainingIntensity"
                    value={formData.TrainingIntensity}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">Daily Step Target?</h3>
                  <OutlinedInput
                    type="number"
                    inputProps={{
                      min: 1000,
                      max: 10000,
                      step: 1000,
                    }}
                    endAdornment={
                      <InputAdornment position="end">steps</InputAdornment>
                    }
                    /* required */
                    name="StepTarget"
                    value={formData.StepTarget}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">Training Progressions?</h3>
                  <TextField
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    placeholder="Enter your progressions..."
                    /* required */
                    name="TrainingProgressions"
                    value={formData.TrainingProgressions}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">Training Plan Compliance?</h3>
                  <Slider
                    style={{ margin: "40px 0 0 0" }}
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                    /* required */
                    name="TrainingCompliance"
                    value={formData.TrainingCompliance}
                    onChange={handleInputChange}
                  />
                </>
              )}

              <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-indigo-500">
                Social Interaction, Goals and Reflection
              </h2>

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">Social Interaction?</h3>
                  <Switch color="primary" />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">Gratitude List:</h3>
                  <TextField
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    placeholder="Enter your gratitude list..."
                    name="Gratitude"
                    value={formData.Gratitude}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">Overall Week Rating?</h3>
                  <Slider
                    style={{ margin: "40px 0 0 0" }}
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                    /* required */
                    name="WeekRating"
                    value={formData.WeekRating}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">Weekly Goals:</h3>
                  <TextField
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    placeholder="Enter your goals..."
                    /* required */
                    name="Goals"
                    value={formData.Goals}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <h3 className="h3 text-xl pb-4">
                    Additional Comments/Help Needed:
                  </h3>
                  <TextField
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    placeholder="Enter your comments..."
                    name="CommentsorHelp"
                    value={formData.CommentsorHelp}
                    onChange={handleInputChange}
                  />
                </>
              )}

<Button
  type="submit"
  style={{
    width: "100%",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "0.25rem",
    backgroundColor: "#4F46E5", // Indigo-500
    color: "#FFFFFF",
    border: "1px solid #fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    outline: "none",
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "rgb(129, 140, 248)"; // Indigo-400
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "rgb(79, 70, 229)"; // Indigo-500
  }}
>
  Submit your weekly check-inh
</Button>

            </Grid>
          </form>
        )}

        {submissionTime &&
          generateGridItem(
            <>
              <p className="text-center">
                <strong>Form submitted at:</strong>{" "}
                {submissionTime.toLocaleString()}
              </p>
            </>
          )}

    </ThemeProvider>
  );
};

export default Form;
