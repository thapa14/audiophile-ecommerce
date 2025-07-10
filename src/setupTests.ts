// Import the jest-dom matchers
import '@testing-library/jest-dom/vitest';

// If you need to configure anything else for your tests, you can do it here
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
afterEach(() => { cleanup() })                // auto-cleanup after each test
