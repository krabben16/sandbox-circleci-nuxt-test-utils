import { setupTest, createPage } from '@nuxt/test-utils'

describe('Browser', () => {
  setupTest({
    browser: true,
  })

  test('test/fixture/pages/index.vue', async () => {
    const page = await createPage('/')
    const actual = await page.innerText('.title')
    const expected = 'fixture'
    expect(actual).toEqual(expected)
  })
})
