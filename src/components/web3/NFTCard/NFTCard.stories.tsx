import type { Meta, StoryObj } from "@storybook/react"

import { NFTCard } from "."

const meta = {
  title: "web3/NFTCard",
  component: NFTCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(story) => <div className="max-w-lg p-6">{story()}</div>],
} satisfies Meta<typeof NFTCard>

export default meta

type Story = StoryObj<typeof NFTCard>

export const Default = {
  args: {
    imageUrl:
      "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt6WmpVellUbGhaQzB6T0RSbUxUUmxaV0V0T1dFNU1TMDJZakZsTURjMU5qa3haV0VHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--058573e24ac955fa2adcbcceea86768447148577/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQUl3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsQiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--2988725aa75d479f95ec8c66cbedc32bdf24b6db/prompthero-prompt-36084fc1911.png",
    name: "Anime Girl",
    price: 0.08,
    onClick: () => alert("ok"),
  },
} satisfies Story
