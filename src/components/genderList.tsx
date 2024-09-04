import globalApi from '@/services/globalApi'
import React from 'react'

function GenderList() {

    const getGenderList =()=>{
      globalApi.getGenderList();
    }
  return (
    <div>Genders List</div>
  )
}

export default GenderList