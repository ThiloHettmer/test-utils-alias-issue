import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestComponent from '@test/components/test-component.vue'

describe('Components:TestComponent', () => {
  test('Dummy test', () => {
    expect(true).toBe(true)
  })

  test('Import component', () => {
    const component = import('@test/components/test-component.vue')

    expect(component).toBeDefined()
  })

  test('Mount component', () => {
    const wrapper = mount(TestComponent, {})

    expect(wrapper.html()).toBeDefined()
  })
})
