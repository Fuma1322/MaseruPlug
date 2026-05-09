import BusinessForm from '@/components/Forms/BusinessForm';
import React from 'react'

export default async function page() {
  
  return (
    <div>
        <BusinessForm title='Create Business' categories={[]} />
    </div>
  );
}