<template>
  
  <HeroSection title="Features" subtitle="The stable core. No surprise modules. No constant re-learning." />
  <FeatureDetail
    :icon="HeroHours"
    imagePosition="left"
    title="Time tracking"
    description="Track work hours quickly with a simple time tracking system designed for small teams that want less friction in their day. Start timers, log manual entries, and organize sessions without navigating bloated menus or unnecessary features. DriftCore helps teams maintain accurate timesheets, monitor billable hours, and keep projects moving without interrupting focus or productivity. No surveillance tools, no screenshots, and no micromanagement - just clean, reliable time tracking software built for everyday work."
  />
  <FeatureDetail
    :icon="HeroProject"
    imagePosition="right"
    title="Projects"
    description="Keep projects organized with a lightweight project tracking workspace built for clarity and speed. Assign time entries to active jobs, customers, and internal tasks so your team always understands where work is going. DriftCore makes it easy to switch between projects, review tracked hours, and maintain visibility without turning project management into a second job. The interface stays intentionally simple so teams can focus on execution instead of navigating complicated systems."
  />
  <FeatureDetail
    :icon="HeroReport"
    imagePosition="left"
    title="Reporting & invoicing"
    description="Turn tracked time into professional reports and invoices in just a few clicks. Filter data by customer, project, employee, or billing period to generate accurate records without manual spreadsheet work. DriftCore simplifies reporting for small businesses, agencies, and service teams that need clear overviews of billable hours and project activity. Export clean timesheet data, review work sessions quickly, and create invoices without relying on disconnected tools or complex accounting workflows."
  />
  <FeatureDetail
    :icon="HeroCustomer"
    imagePosition="right"
    title="Customers"
    description="Manage customers, billing relationships, and project assignments from one clean workspace designed for growing teams. Store client information, connect projects to accounts, and keep all time tracking activity organized without clutter. DriftCore helps small businesses maintain a clear overview of customer work, invoicing history, and tracked hours so nothing gets lost between projects. The system stays lightweight and easy to navigate, even as your customer list grows."
  />
  <FeatureDetail
    :icon="HeroApprovals"
    imagePosition="left"
    title="Time approvals"
    description="Review and approve employee timesheets through a clear workflow that keeps projects, payroll, and billing aligned. Managers can verify tracked hours, lock approved entries, and reduce administrative back-and-forth without slowing down the team. DriftCore keeps the approval process simple and transparent so employees can submit work confidently while businesses maintain accurate reporting and invoicing records. No complicated approval chains, no unnecessary dashboards - just efficient time approval software that supports focused teams."
  />
  <CTASection />
</template>

<script setup>
import { useMeta } from '../composables/useMeta.js'
import HeroSection from '../components/common/HeroSection.vue'

useMeta({
  title: 'Features – Simple, Focused Time Tracking Tools',
  description: 'Explore DriftCore\'s features: time tracking, team approvals, project reporting, and customisation. Built for teams who want to focus, not fiddle.',
  keywords: 'time tracker features, time approvals, team time tracking, simple rapports, project time tracking',
})

import FeatureDetail from '../components/common/FeatureDetail.vue'
import HeroHours    from '../assets/graphics/hero-hours.svg'
import HeroProject  from '../assets/graphics/hero-project.svg'
import HeroReport   from '../assets/graphics/hero-report.svg'
import HeroCustomer from '../assets/graphics/hero-customer.svg'
import HeroApprovals from '../assets/graphics/hero-approvals.svg'

import CTASection from '../components/common/CTASection.vue'

</script>