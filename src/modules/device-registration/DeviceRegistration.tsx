import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";


interface IDeviceRegistrationProps {
}

const DeviceRegistration: React.FC = () => {
    const [devEUI, setDevEUI] = useState("")
  const onNewScanResult = (props:any)  => {
    setDevEUI(props)
  }
  return <>
    <Grid container spacing={3} direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Grid item xs={12}>
            <Typography>hello</Typography>
        </Grid>
        <Grid item xs={12}>
            <TextField id='name' placeholder="Name" focused required/>
        </Grid>
        <Grid item xs={12}>
            <TextField id='dev_eui' placeholder="Dev EUI" variant='outlined' focused value={devEUI}/>
        </Grid>
        <Grid item xs={12}>
            <TextField id="app_eui" placeholder="App EUI" variant='outlined' focused />
        </Grid>
        <Grid item xs={12}>
            <TextField id="app_key" placeholder="App Key" variant='outlined' focused />
        </Grid>
    </Grid>
</>
};

export default DeviceRegistration;
