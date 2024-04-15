import React from 'react';
import { useState } from 'react';
import { FormControl, InputLabel, NativeSelect, styled, alpha, AppBar, Box, Toolbar, Typography, InputBase, Stack, Grid, Button, TextField, Drawer } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';
import CardComponent from '../CardComponent/CardComponent';


const rooms = [
    {name:'Stylist Apartment in the centre of the city',
    rating:'4.40',
    apartmentType:'2 bedroom, 1 bath',
    superHost: true,
    location: 'Lahore',
    maxAdults: 4,
    maxKids: 2,
    pic:'https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen.jpg'},
    {name:'Studio Apartment overlooking the beach',
    rating:'4.60',
    apartmentType:'1 bedroom, 1 bath',
    superHost: false,
    location: 'Karachi',
    maxAdults: 3,
    maxKids: 1,
    pic:'https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000'},
    {name:'Cozy single in the centre of the city',
    rating:'4.20',
    apartmentType:'1 bedroom, 1 bath',
    superHost: true,
    location: 'Peshawar',
    maxAdults: 2,
    maxKids: 1,
    pic:'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/03/trump-hotel-chicago-illinois-usa.jpg'},
    {name:'Suite for family in central city',
    rating:'4.7',
    apartmentType:'2 bedroom, 1 bath',
    superHost: true,
    location: 'Multan',
    maxAdults: 2,
    maxKids: 0,
    pic:'https://www.thejewelny.com/wp-content/uploads/sites/3/2021/04/2019-06-12_CQ_Jewel_RM404_ADA_mark-weinberg_1704_White-Duvet-72.jpg'},
    {name:'Beach cabin with a view of the sea',
    rating:'4.20',
    apartmentType:'1 bedroom, 1 bath',
    superHost: true,
    location: 'Quetta',
    maxAdults: 4,
    maxKids: 2,
    pic:'https://s3.amazonaws.com/uploads.opalcollection.com/app/uploads/sites/9/2022/07/22154724/HEADER_Stay-at-Jupiter-Beach-Resort.jpg'},
    {name:'Holiday suite at beach front',
    rating:'4.20',
    apartmentType:'1 bedroom, 1 bath',
    superHost: false,
    location: 'Lahore',
    maxAdults: 4,
    maxKids: 4,
    pic:'https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5862a23026f8f.jpg/1920x1080/fit/80/201077a028f23630008e10851dd4f093.jpg'},
    {name:'Premium suite in the city',
    rating:'3.90',
    apartmentType:'2 bedroom, 1 bath',
    superHost: true,
    location: 'Lahore',
    maxAdults: 4,
    maxKids: 2,
    pic:'https://www.bestwesternplusmeridian.com/Content/images/Queen-Room.jpg'},
    {name:'Studio Apartment in Times Square',
    rating:'4.80',
    apartmentType:'1 bedroom, 1 bath',
    superHost: false,
    location: 'Karachi',
    maxAdults: 3,
    maxKids: 1,
    pic:'https://s3-us-east-2.amazonaws.com/orbitz-media/blog/wp-content/uploads/2018/08/02010426/yotel-new-york-times-square-habitacion-3d22367.jpg'},
    {name:'Presidential Suite in the centre of the city',
    rating:'4.20',
    apartmentType:'1 bedroom, 1 bath',
    superHost: false,
    location: 'Peshawar',
    maxAdults: 2,
    maxKids: 1,
    pic:'https://content.r9cdn.net/rimg/himg/ac/a1/3f/expediav2-7476135-77d933-220177.jpg'},
    {name:'Modern apartment overlooking the skyline',
    rating:'4.70',
    apartmentType:'2 bedroom, 1 bath',
    superHost: true,
    location: 'Multan',
    maxAdults: 2,
    maxKids: 0,
    pic:'https://media.cntraveler.com/photos/57ab71ffbc2d9bbc1128669c/16:9/w_2560%2Cc_limit/LoftRoom-NewYorkEdition-NYC-CRHotelNikolasKoenig.jpg'},
    
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'red'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [numAdults, setNumAdults] = React.useState('');
    const [numKids, setNumKids] = React.useState('');
  
    const handleDrawerOpen = () => {
      setOpenDrawer(true);
    };
  
    const handleDrawerClose = () => {
      setOpenDrawer(false);
    };
  
    const handleLocationChange = (event) => {
      setSelectedLocation(event.target.value);
    };
  
    const handleNumAdultsChange = (event) => {
      setNumAdults(event.target.value);
    };
  
    const handleNumKidsChange = (event) => {
      setNumKids(event.target.value);
    };
  
    const filteredRooms = rooms.filter((room) => {
      const isLocationMatch = selectedLocation === 'All' || room.location === selectedLocation;
      const isAdultsMatch = !numAdults || parseInt(numAdults) <= room.maxAdults;
      const isKidsMatch = !numKids || parseInt(numKids) <= room.maxKids;
  
      return isLocationMatch && isAdultsMatch && isKidsMatch;
    });
  
    return (
        <Stack>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'red' }}
                        >
                            winbnb
                        </Typography>
                        <Search onClick={handleDrawerOpen}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{ color: 'red' }}
                            />
                            </Search>
                    </Toolbar>
                </AppBar>
            </ Box>
            <Grid container spacing={1}>
                <CardComponent data={filteredRooms} />
            </Grid>
            <Drawer anchor="top" open={openDrawer} onClose={handleDrawerClose}>
                <Box fullWidth sx={{ height: '100%', padding: 20 }}>
                    <Stack direction="row" spacing={2} justifyContent='space-evenly'>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Location
                            </InputLabel>
                            <NativeSelect
                                defaultValue={selectedLocation}
                                inputProps={{
                                    name: 'location',
                                    id: 'uncontrolled-native',
                                }}
                                onChange={handleLocationChange}
                            >
                                <option value="All">All</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Multan">Multan</option>
                                <option value="Peshawar">Peshawar</option>
                                <option value="Quetta">Quetta</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField label="Number of Adults" type="number" value={numAdults} onChange={handleNumAdultsChange} fullWidth />
                        <TextField label="Number of Kids" type="number" value={numKids} onChange={handleNumKidsChange} fullWidth />
                        <Button variant="contained" color="primary" fullWidth onClick={handleDrawerClose}>
                            <Stack direction="row" justifyContent="space-evenly">
                                <SearchIcon />
                                <Typography>Search</Typography>
                            </Stack>
                        </Button>
                    </Stack>
                </Box>
            </Drawer>
        </Stack>
    
    );
  };
  
  export default Navbar;
