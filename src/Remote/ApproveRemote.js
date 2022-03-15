import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { editUser, getUsers } from '../api/api';
import profilePhoto from '../images/profilePhoto.png';

const initialValues = {
  messageReject: '',
};

const ApproveRemote = () => {
  const [remote, setRemote] = useState(initialValues);
  const { id } = useParams();

  const { messageReject } = remote;

  useEffect(() => {
    loadremoteData();
  }, []);

  const loadremoteData = async () => {
    const response = await getUsers(id);
    setRemote(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRemote({
      ...remote,
      [name]: value,
    });
  };
  
  console.log(remote)

  const editRequestDetails = async () => {
    const request = {
      name: remote.name,
      email: remote.email,
      role: remote.role,
      gender: remote.gender,
      date: remote.date,
      password: remote.password,
      nationality: remote.nationality,
      id: remote.id,
      building: remote.building,
      office: remote.office,
      floor: remote.floor,
      status: remote.status,
      message: remote.message,
      remoteApproval: remote,
      remoteStatus: false,
    };
    await editUser(id, request);
  };

  const approveRequest = async () => {
    const request = {
      name: remote.name,
      email: remote.email,
      role: remote.role,
      gender: remote.gender,
      date: remote.date,
      password: remote.password,
      nationality: remote.nationality,
      id: remote.id,
      building: remote.building,
      office: remote.office,
      floor: remote.floor,
      status: remote.status,
      message: remote.message,
      remoteApproval: remote.remoteApproval,
      remoteStatus: true,
    };
    await editUser(id, request);
  };

  return (
    <div className='approval-wrapper'>
      <p>
        <span>Work remote &gt;</span> {remote.name}
      </p>
      <h1> Answer remote work request </h1>
      <div className='remote-text'>
        <div className='title'>
          <img src={profilePhoto} alt='user profile' />
          <h4>{remote.name}</h4>
        </div>
        <p>{remote.message}</p>
      </div>
      <button onClick={approveRequest}>APPROVE</button>
      <p>OR</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='reason'>
          Answer reason<span>(Cannot be empty)</span>
        </label>
        <textarea
          name='reason'
          id='reason'
          placeholder='Your message'
          value={messageReject}
          onChange={handleChange}
        ></textarea>
        <button type='submit' onClick={editRequestDetails}>
          REJECT
        </button>
      </form>
    </div>
  );
};

export default ApproveRemote;
