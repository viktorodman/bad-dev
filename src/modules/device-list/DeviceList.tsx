import { Button, ButtonGroup, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";


interface IDeviceRegistrationProps {
}

const DeviceRegistration: React.FC = () => {
    const [devEUI, setDevEUI] = useState("")
  const onNewScanResult = (props:any)  => {
    setDevEUI(props)
  }
  return( 
    <>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    </>
    )
};

export default DeviceRegistration;
