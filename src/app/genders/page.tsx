import globalApi from '@/services/globalApi'
import React from 'react'

function GenderList() {

    const getGenderList =()=>{
      globalApi.getGenreList.then((resp) => {
        console.log(resp);
      })
    }
  return (
    <div>Genders List</div>
  )
}

export default GenderList