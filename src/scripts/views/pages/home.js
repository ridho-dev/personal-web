const HomePage = {
  async render () {
    return `
      <section class="home-section">
        <div class="greetings">
          <p>Hi there! I'm</p>
          <h1>Ridho Pardede</h1>
          <p class="home-about">I'm passionate about crafting experiences that are engaging, accessible, and user-centric.</p>
        </div>
        
      </section>
      
    `
  },

  async afterRender () {

  }
}

export default HomePage
