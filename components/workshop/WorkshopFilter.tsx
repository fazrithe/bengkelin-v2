import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Card, CardContent, FormControlLabel, FormGroup, Typography, Divider } from "@mui/material";
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'
import { FormControl } from 'react-bootstrap';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function WorkshopFilter(){
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(
        <Card variant="outlined">
            <CardContent>
                <Typography fontWeight="bold">Filter</Typography>
                <Divider/>
                <Typography>Jenis Bengkel</Typography>
                <FormGroup className="ml-2">
                    <FormControlLabel control={<Checkbox/>} label="Mobil" />
                    <FormControlLabel control={<Checkbox/>} label="Motor" />
                </FormGroup>
                <hr></hr>
                <Accordion variant="outlined" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Bengkel Resmi</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Toyota</Typography>
                        <Typography>Suzuki</Typography>
                        <Typography>Mitsubithi</Typography>
                        <Typography>Yamaha</Typography>
                        <Typography>Honda</Typography>
                    </AccordionDetails>
                </Accordion>
                <hr></hr>
                <Typography>Lokasi</Typography>
                <FormGroup className="ml-2">
                    <FormControlLabel control={<Checkbox/>} label="Jakarta" />
                    <FormControlLabel control={<Checkbox/>} label="Bandung" />
                    <FormControlLabel control={<Checkbox/>} label="Surabaya" />
                    <FormControlLabel control={<Checkbox/>} label="Medan" />
                </FormGroup>
                <hr></hr>
            </CardContent>
        </Card>
    )
}