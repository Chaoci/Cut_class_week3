/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:'12px',
    },
    extend: {
      colors:{
        'web_red':'#650300',
        'web_lightred':'#AA0601',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
