import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Typography,Grid } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './FormInput';
import {commerce} from '../lib/commerce'
import {Link} from 'react-router-dom'


const AddressForm = ({checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubDivs, setShippingSubDivs] = useState([]);
    const [subDiv, setSubDiv] = useState('');
    const [shippingOptions, setShippgOptions] = useState([]);
    const [shippingOption, setShippgOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name])=> ({id: code, label: name}));
    const subdivisions = Object.entries(shippingSubDivs).map(([code, name])=> ({id: code, label: name}));
    const options = shippingOptions.map((sO) =>({id: sO.id, label:`${sO.description} - (${sO.price.formatted_with_symbol})`}))
    const fetchShippingCountries = async (checkoutTokenId) =>{
        const { countries }= await commerce.services.localeListShippingCountries(checkoutTokenId);
       setShippingCountries(countries);
       setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivs = async (countryCode) =>{
        const { subdivisions }= await commerce.services.localeListSubdivisions(countryCode);
       setShippingSubDivs(subdivisions);
       setSubDiv(Object.keys(subdivisions)[0]);
    }
    const fetchShippingOptions = async (checkoutTokenId, country, region=null)=>{
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})
        setShippgOptions(options)
        setShippgOption(options[0].id)
    }
    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id);
    },[])
    useEffect(()=>{
       if(shippingCountry) fetchSubdivs(shippingCountry)
    },[shippingCountry])
    useEffect(()=>{
        if(subDiv) fetchShippingOptions(checkoutToken.id, shippingCountry, subDiv);
    },[subDiv])
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) =>next({...data, shippingCountry, subDiv, shippingOption}))}>
                    <Grid container spacing={3}>
                        <FormInput name="firstName" label="First Name"/>
                        <FormInput name="lastName" label="Last Name"/>
                        <FormInput name="address1" label="Address"/>
                        <FormInput name="email" label="Email"/> 
                        <FormInput name="city" label="City"/>
                        <FormInput name="pin" label="PIN code"/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                            {countries.map((country)=>(
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                            ))}
                                
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping subdivision</InputLabel>
                            <Select value={subDiv} fullWidth onChange={(e) => setSubDiv(e.target.value)}>
                            {subdivisions.map((subdivision)=>(
                                <MenuItem key={subdivision.id} value={subdivision.id}>
                                    {subdivision.label}
                                </MenuItem>
                            ))}
                                
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e)=> setShippgOptions(e.target.value)}>
                            {options.map((option)=>(
                                <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br/>
                    <div styles={{display:'flex', justifyContent:'space-between'}}>
                        <Button component={Link} to="/cart" variant="contained" color="secondary" style={{marginRight:'2rem'}}>Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
}

export default AddressForm;
