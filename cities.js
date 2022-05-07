export const citiesList =[
    {from: 'paris', to:'lyon', km:466},
    {from: 'paris', to:'marseille', km:773},
    {from: 'paris', to:'bordeaux', km:583},
    {from: 'paris', to:'valence', km:563},
    {from: 'paris', to:'brest', km:591},

    {from: 'lyon', to:'paris', km:466},
    {from: 'lyon', to:'marseille', km:315},
    {from: 'lyon', to:'bordeaux', km:556},
    {from: 'lyon', to:'valence', km:103},
    {from: 'lyon', to:'brest', km:971},

    {from: 'marseille', to:'paris', km:773},
    {from: 'marseille', to:'lyon', km:315},
    {from: 'marseille', to:'bordeaux', km:645},
    {from: 'marseille', to:'valence', km:214},
    {from: 'marseille', to:'brest', km:1280}
];

/// ========== Test/echec ===========

export const citiesList_3 =[
    {city: 'paris', distance:[
            {nom:'lyon', km:466},
            {nom:'marseille', km:773},
            {nom:'bordeaux', km:583},
            {nom:'valence', km:563},
            {nom:'brest', km:591}]
    },
    {city: 'marseille', distance:[
            {nom:'paris', km:773},
            {nom:'lyon', km:315},
            {nom:'bordeaux', km:645},
            {nom:'valence', km:214},
            {nom:'brest', km:1280}]
    },
];


export const citiesList_2 = [
    {city: 'paris', score: 2000, distance:{
            lyon:466,
            marseille:773,
            bordeaux:583,
            valence:563,
            brest:591
        }},
    {city: 'lyon', score: 1000, distance:{
            paris:466,
            marseille:315,
            bordeaux:556,
            valence:103,
            brest:971
        }},
    {city: 'marseille', score: 600, distance:{
            paris:773,
            lyon: 315,
            bordeaux:645,
            valence:214,
            brest:1280
        }},
    {city: 'bordeaux', score: 300, distance:{
            paris:583,
            lyon:556,
            marseille:645,
            valence:652,
            brest:652
        }},
    {city: 'valence', score: 500, distance:{
            paris:563,
            lyon:103,
            marseille:214,
            bordeaux:652,
            brest:1068
        }},
    {city: 'brest', score: 100, distance:{
            paris:591,
            lyon:971,
            marseille:1280,
            bordeaux:652,
            valence:1068
        }}
];
