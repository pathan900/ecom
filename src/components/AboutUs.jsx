import { Container, Divider, Typography, Paper } from '@material-ui/core'
import React from 'react'
import useStyle from './aboutusStyles';
import {Link} from 'react-router-dom'
const AboutUs = () => {
    const classes = useStyle();
    return (<>
        <div className={classes.toolbar}/>
       <Container style={{marginTop:'50px'}}>
       <Paper style={{margin: '20px'}}>
           <Typography style={{margin: '20px'}} variant="h3">About Us</Typography>
           <Typography style={{margin: '20px'}} variant="body2" component="h1">OnlineShop.com, Inc., is an Indian multinational technology company based in Bhopal,  which focuses on e-commerce. It is considered one of the Big Five companies in India. The company has been referred to as "one of the most influential economic and cultural forces in the world", as well as the world's most valuable brand</Typography>
           <Divider/>
           <Typography style={{margin: '20px'}} variant="body2">Online Shop is known for its disruption of well-established industries through technological innovation and mass scale.It is the world's largest online marketplace, as measured by revenue and market capitalization. Online Shop is the largest Internet company by revenue in the world. It is the second largest private employer in the United States and one of the world's most valuable companies.</Typography>
           <Divider/>
           <Typography style={{margin: '20px'}} variant="body2">
           Online Shop was founded by Abdul in Bhopal, India, on November 10,2020. The company started as an online marketplace for books but expanded to sell electronics, software, video games, apparel, furniture, food, toys, and jewelry. In 2015, Online Shop surpassed Walmart as the most valuable retailer in the United States by market capitalization.In 2021, Amazon acquired Whole Foods Market for US$13.4 billion, which substantially increased its footprint as a physical retailer. In 2021, Abdul announced that its two-day delivery service,had surpassed 100 million subscribers worldwide.
           </Typography>
           <Typography component={Link} to="/"   >
                        <img src="https://i.fbcd.co/products/original/c30f6ce7e9ef4378309721483007e1d34f641660fcae65a66ccfd64860c58f2f.jpg" alt="ecom" height="95px" className={classes.image} />
                    </Typography>
           </Paper>
       </Container>
       </>
    )
}

export default AboutUs
