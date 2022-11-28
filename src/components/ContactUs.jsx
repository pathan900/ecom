import { Container, Typography, Divider, Paper } from '@material-ui/core'
import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import useStyle from './aboutusStyles';

const ContactUs = () => {
    const classes = useStyle();
    return (<>
        <div className={classes.toolbar} />
        <Container style={{ marginTop: '50px' }}>
            <Paper style={{ margin: '20px' }}>
                <Typography  variant="h3">Contact Us</Typography>
                <Divider />
                <Typography style={{ margin: '20px' }}>
                    <CallIcon /> +91-888 888 888 8
            </Typography>
                <Typography style={{ margin: '20px' }}>
                    <MailIcon /> onlineshop@gmail.com
            </Typography>
                <Typography style={{ margin: '20px' }}>
                    
                    xyz state, Royal Plaza, station - west , Bhopal - 462022, Madhaya Pradesh
            </Typography>
                <div class=" container-fluid">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2788054359844!2d77.42775676492315!3d23.232939384846937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4260b57a56d5%3A0xbb19745b0a7c10c8!2sDB%20City%20Mall%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1609929342811!5m2!1sen!2sin" frameborder="0" height="400px" width="100%"></iframe>
                </div>
            </Paper>
        </Container>
    </>
    )
}

export default ContactUs
