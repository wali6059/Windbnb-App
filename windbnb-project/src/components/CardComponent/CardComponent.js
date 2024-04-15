import React from 'react'
import { Grid, Card, CardMedia, CardContent,Stack,Typography,Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

const CardComponent = ({data}) => {
  return (
    data.map((room, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ margin: 5, height: '80%' }}>
                <CardMedia component="img" height="60%" src={room.pic} alt={room.name} /> 
                <CardContent>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography fontSize={16} color="grey">
                            {room.apartmentType}
                        </Typography>
                        {room.superHost && (
                            <Button variant="outlined" sx={{ color: 'green', backgroundColor: 'white', borderColor: 'green' }}>
                                Superhost
                            </Button>
                        )}
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography fontSize={16} color="black">
                            {room.name}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between">
                            <StarIcon sx={{ color: 'red' }} />
                            <Typography fontSize={16} color="red">
                                {room.rating}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography fontSize={16} color="grey">
                        Location: {room.location}
                    </Typography>
                    <Typography fontSize={16} color="grey">
                        Max Adults: {room.maxAdults}
                    </Typography>
                    <Typography fontSize={16} color="grey">
                        Max Kids: {room.maxKids}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ))
  )
}

export default CardComponent