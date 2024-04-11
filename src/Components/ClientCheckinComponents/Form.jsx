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

import { useAuth } from "./AuthContext.jsx"
import { getDatabase, ref, push, serverTimestamp} from "firebase/database";
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: "#48BBFF", 
    },
    secondary: {
      main: "#3B82F6", 
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
    userId: null,
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
  const [formVisible, setFormVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const { user } = useAuth();
  const database = getDatabase();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Set the submissionTime directly when constructing formData
    const formDataWithTimestamp = {
      ...formData,
      userId: user.uid,
      submissionTime: serverTimestamp(),
    };
  
    // Get a reference to the "forms" node in your database
    const formsRef = ref(database, `forms/${user.uid}`);
  
    // Push the form data to the database
    push(formsRef, formDataWithTimestamp);
  
    setFormVisible(false);
    setSuccessMessage(true);
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
  const navigate = useNavigate();

const backToDashboard = () => {
 navigate('/clients/dashboard')
}
  
  const generateGridItem = (children) => (
    <Grid item xs={12}>
      <Paper elevation={4} style={{ padding: "20px", backgroundColor: "#f7fafc" }}>
        {children}
      </Paper>
    </Grid>
  );

  return (
<div className="bg-gradient-to-r from-sky-500 to-sky-700 p-8 rounded-lg shadow-2xl w-full text-s text-white flex flex-col items-center justify-center my-4 mx-auto sm:w-3/4 lg:w-1/2">
<div className="h1 flex items-center justify-center w-10 h-10 border-0 rounded-full bg-sky-300 text-sky-100 text-
xl">
        <i className="fa-solid fa-dumbbell"></i>
      </div>
      <h2 className="m-8 h2 text-3xl uppercase text-shadow flex justify-center text-sky-100 font-bold tracking-wide">Client Checkin</h2>

    <ThemeProvider theme={theme}>
      <CssBaseline />

        {formVisible && (
          <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={2}>
            <p className="mt-4 leading-loose text-xl uppercase text-shadow flex justify-center text-sky-100 font-semibold tracking-wide">
                              Body Stats and Sleep
              </p>

              {generateGridItem(
                <>
                  <p className="text-md pb-4">
                    Body weight this morning (weighed upon waking, before
                    eating)?
                  </p>
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
                  <p className="text-md pb-4">
                    Rate your sleep quality for the week (1 being lowest, 10
                    being highest)?
                  </p>
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
                  <p className="text-md pb-4">
                    Average hours of sleep per night?
                  </p>
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
                  <p className="text-md pb-4">
                    Reasons for poor sleep, if applicable?
                  </p>
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

<p className="mt-4 leading-loose text-xl uppercase text-shadow flex justify-center text-sky-100 font-semibold tracking-wide">
                Stress and Energy
              </p>

              {generateGridItem(
                <>
                  <p className="text-md pb-4">
                    How would you rate your stress levels for the week?
                  </p>
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
                  <p className="text-md pb-4">
                    Reasons for increased stress, if applicable?
                  </p>
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
                  <p className="text-md pb-4">
                    How would you rate your energy levels for the week?
                  </p>
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
                  <p className="text-md pb-4">
                    Reasons for low levels of energy, if applicable?
                  </p>
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

<p className="mt-4 leading-loose text-xl uppercase text-shadow flex justify-center text-sky-100 font-semibold tracking-wide">
                Nutrition and Training
              </p>

              {generateGridItem(
                <>
                  <p className="text-md pb-4">
                    Challenges in Nutrition Plan:
                  </p>
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
                  <p className="text-md pb-4">
                    Rate Nutrition Plan Compliance?
                  </p>
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
                    name="NutritionCompliance"
                    value={formData.NutritionCompliance}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {generateGridItem(
                <>
                  <p className="text-md pb-4">
                    Training sessions complete?
                  </p>
                  <FormControlLabel control={<Switch />} />
                </>
              )}

              {generateGridItem(
                <>
                  <p className="text-md pb-4">Training Intensity:</p>
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
                  <p className="text-md pb-4">Daily Step Target?</p>
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
                  <p className="text-md pb-4">Training Progressions?</p>
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
                  <p className="text-md pb-4">Training Plan Compliance?</p>
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

<p className="mt-4 leading-loose text-xl uppercase text-shadow flex justify-center text-sky-100 font-semibold tracking-wide">
                Social Interaction, Goals and Reflection
              </p>

              {generateGridItem(
                <>
                  <p className="text-md pb-4">Social Interaction?</p>
                  <Switch color="primary" />
                </>
              )}

              {generateGridItem(
                <>
                  <p className="text-md pb-4">Gratitude List:</p>
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
                  <p className="text-md pb-4">Overall Week Rating?</p>
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
                  <p className="text-md pb-4">Weekly Goals:</p>
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
                  <p className="text-md pb-4">
                    Additional Comments/Help Needed:
                  </p>
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

<button
  type="submit"
  className="my-4 mx-auto px-6 py-3 rounded-lg shadow-lg bg-white text-sky-700 font-semibold transition-colors duration-300 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"

>
  Submit your check-in
</button>

            </Grid>
          </form>
        )}

        {successMessage &&  <div>
              <div className="text-s text-center my-4">
                <strong>Form submitted! Nice work.</strong>
              </div>

              <button
  type="button"
  onClick={backToDashboard}
  className="my-4 mx-auto px-6 py-3 rounded-lg shadow-lg bg-white text-sky-700 font-semibold transition-colors duration-300 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">                Back to the Dashboard
            </button>
            </div>
}

    </ThemeProvider>
    </div>
  );
};

export default Form;
