import express from "express";
const app = express();
const port = 3000;

// This is a home page connected by server
app.get("/",(req,res)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f0f0f0;
          }
  
          header {
              background-color: #333;
              color: #fff;
              padding: 20px;
              text-align: center;
          }
  
          nav {
              background-color: #444;
              color: #fff;
              padding: 10px;
              text-align: center;
          }
  
          nav ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
          }
  
          nav ul li {
              display: inline-block;
              margin-right: 20px;
          }
  
          nav ul li a {
              text-decoration: none;
              color: #fff;
          }
  
          section {
              padding: 40px;
              text-align: center;
              background-color: #fff;
              margin: 10px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
  
          section h2 {
              font-size: 32px;
              margin-bottom: 20px;
          }
  
          section p {
              font-size: 18px;
              line-height: 1.6;
          }
  
          aside {
              background-color: #f2f2f2;
              padding: 20px;
          }
  
          footer {
              background-color: #333;
              color: #fff;
              text-align: center;
              padding: 20px;
          }
      </style>
  </head>
  
  <body>
      <header>
          <h1>Welcome to Our Website</h1>
      </header>
  
      <nav>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
      </nav>
  
      <section>
          <h2>Welcome to Our Company</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla augue sit amet nisl facilisis
              tincidunt. Nunc condimentum, quam eget lobortis pellentesque, felis mauris suscipit urna, at porttitor
              turpis metus quis quam.</p>
      </section>
  
      <aside>
          <h2>Latest News</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla augue sit amet nisl facilisis
              tincidunt. Nunc condimentum, quam eget lobortis pellentesque, felis mauris suscipit urna, at porttitor
              turpis metus quis quam.</p>
      </aside>
  
      <section>
          <h2>Our Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla augue sit amet nisl facilisis
              tincidunt. Nunc condimentum, quam eget lobortis pellentesque, felis mauris suscipit urna, at porttitor
              turpis metus quis quam.</p>
      </section>
  
      <footer>
          <p>Contact us at: contact@company.com | Phone: (123) 456-7890</p>
          <p>&copy; 2023 Our Company. All rights reserved.</p>
      </footer>
  </body>
  
  </html>
  `)
})

// This is a about page connected by server
app.get("/about",(req,res)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About Us</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f0f0f0;
          }
  
          header {
              background-color: #2c3e50;
              color: #fff;
              padding: 20px;
              text-align: center;
          }
  
          nav {
              background-color: #34495e;
              color: #fff;
              padding: 10px;
              text-align: center;
          }
  
          nav ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
          }
  
          nav ul li {
              display: inline-block;
              margin-right: 20px;
          }
  
          nav ul li a {
              text-decoration: none;
              color: #fff;
          }
  
          section {
              padding: 40px;
              text-align: center;
              background-color: #fff;
              margin: 10px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
  
          section h2 {
              font-size: 32px;
              margin-bottom: 20px;
          }
  
          section p {
              font-size: 18px;
              line-height: 1.6;
          }
  
          .team-member {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 20px;
          }
  
          .team-member img {
              width: 150px;
              height: 150px;
              border-radius: 50%;
              object-fit: cover;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
  
          .team-member h3 {
              margin-top: 10px;
              font-size: 24px;
          }
  
          footer {
              background-color: #2c3e50;
              color: #fff;
              text-align: center;
              padding: 20px;
          }
      </style>
  </head>
  
  <body>
      <header>
          <h1>About Us</h1>
      </header>
  
      <nav>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
      </nav>
  
      <section>
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla augue sit amet nisl facilisis
              tincidunt. Nunc condimentum, quam eget lobortis pellentesque, felis mauris suscipit urna, at porttitor
              turpis metus quis quam.</p>
      </section>
  
      <section>
          <h2>Our Team</h2>
          <div class="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 1">
              <h3>John Doe</h3>
              <p>Co-Founder</p>
          </div>
          <div class="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 2">
              <h3>Jane Smith</h3>
              <p>Marketing Manager</p>
          </div>
          <div class="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 3">
              <h3>Mike Johnson</h3>
              <p>Lead Developer</p>
          </div>
      </section>
  
      <footer>
          &copy; 2023 Your Company. All rights reserved.
      </footer>
  </body>
  
  </html>
  `)
})

// This is a contact page connected by server

app.get("/contact",(req,res)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Us</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f0f0f0;
          }
  
          header {
              background-color: #2c3e50;
              color: #fff;
              padding: 20px;
              text-align: center;
          }
  
          nav {
              background-color: #34495e;
              color: #fff;
              padding: 10px;
              text-align: center;
          }
  
          nav ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
          }
  
          nav ul li {
              display: inline-block;
              margin-right: 20px;
          }
  
          nav ul li a {
              text-decoration: none;
              color: #fff;
          }
  
          section {
              padding: 40px;
              text-align: center;
              background-color: #fff;
              margin: 10px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
  
          section h2 {
              font-size: 32px;
              margin-bottom: 20px;
          }
  
          section p {
              font-size: 18px;
              line-height: 1.6;
          }
  
          form {
              max-width: 500px;
              margin: 0 auto;
              text-align: left;
          }
  
          form label {
              display: block;
              font-size: 18px;
              margin-bottom: 5px;
          }
  
          form input,
          form textarea {
              width: 100%;
              padding: 10px;
              margin-bottom: 15px;
              border: 1px solid #ccc;
              border-radius: 5px;
              font-size: 16px;
          }
  
          form textarea {
              resize: vertical;
              height: 150px;
          }
  
          form input[type="submit"] {
              background-color: #2c3e50;
              color: #fff;
              cursor: pointer;
          }
  
          form input[type="submit"]:hover {
              background-color: #34495e;
          }
  
          footer {
              background-color: #2c3e50;
              color: #fff;
              text-align: center;
              padding: 20px;
          }
      </style>
  </head>
  
  <body>
      <header>
          <h1>Contact Us</h1>
      </header>
  
      <nav>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
      </nav>
  
      <section>
          <h2>Get in Touch</h2>
          <p>Fill out the form below to contact us. We'll get back to you as soon as possible.</p>
          <form>
              <label for="name">Your Name:</label>
              <input type="text" id="name" name="name" required>
  
              <label for="email">Email Address:</label>
              <input type="email" id="email" name="email" required>
  
              <label for="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
  
              <input type="submit" value="Send Message">
          </form>
      </section>
  
      <footer>
          &copy; 2023 Your Company. All rights reserved.
      </footer>
  </body>
  
  </html>
  `)
})

app.listen(port,()=>{
  console.log(`Server running on ${port}`);
})