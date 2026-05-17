<template>
  
  <HeroSection title="Features" subtitle="The stable core. No surprise modules. No constant re-learning." />
  <FeatureDetail 
  :icon="HeroHours"    
  imagePosition="left"  title="Time tracking"        
  description="Track time quickly, keep sessions clean, and turn every minute into something usable without extra friction." />
  <FeatureDetail 
  :icon="HeroProject"  imagePosition="right" title="Projects"             
  description="Organize work by project, keep the team aligned, and move between active jobs without losing context." />
  <FeatureDetail 
  :icon="HeroReport"   imagePosition="left"  title="Reporting & invoicing" 
  description="Convert tracked time into professional invoices instantly. Filter by customer, project, or person. Done in minutes, not hours." />
  <FeatureDetail 
  :icon="HeroCustomer" imagePosition="right" title="Customers"            
  description="Keep every client, contact, and billing relationship in one place so the work stays easy to manage." />
  <FeatureDetail 
  :icon="HeroApprovals" imagePosition="left" title="Time approvals"       
  description="Review, approve, and lock time entries with a clear workflow that keeps everything moving." />
  <CTASection />
</template>

<script setup>
import HeroSection from '../components/common/HeroSection.vue'

import FeatureDetail from '../components/common/FeatureDetail.vue'
import HeroHours    from '../assets/graphics/hero-hours.svg'
import HeroProject  from '../assets/graphics/hero-project.svg'
import HeroReport   from '../assets/graphics/hero-report.svg'
import HeroCustomer from '../assets/graphics/hero-customer.svg'
import HeroApprovals from '../assets/graphics/hero-approvals.svg'

import CTASection from '../components/common/CTASection.vue'

</script>