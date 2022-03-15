import React from 'react'

const RequestRemote = () => {
  return (
    <div className='request-remote'>        
    <p>Work remote</p>
    <h1> Request to work remote</h1>
    <form>
      <div className='percentage'>
      <label htmlFor='percentage'>Remote work percentage</label>
      <select>
        <option>Select</option>
        <option value='0'>0%</option>
        <option value='25'>25%</option>
        <option value='50'>50%</option>
        <option value='75'>75%</option>
      </select>
      </div>
      <div className='input'>
        <label htmlFor='text'>Reason of request<span>(cannot be empty)</span></label>
        <textarea name='text' id='text'></textarea>
      </div>
      <button>Submit</button>
    </form>

    <h2>Request Status</h2>
    <p>Not submitted</p>
    </div>
  )
}

export default RequestRemote