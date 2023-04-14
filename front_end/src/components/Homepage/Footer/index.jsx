import './footer.css'

export default function Footer() {
  return (
    <footer id="contact">
        <div class="footer_wrapper">
            <div class="socials">   
                <h4>Contacts</h4>   
                <ul>
                    <li><span class="icon icon-phone"></span> +254 785 789 515</li>
                    <li><span class="icon icon-envelope"></span> lakeelementaitamanor@gmail.com</li>
                    <li><a href="https://www.instagram.com/lake_elementaita_manor/" target="_blank"><span class="icon icon-instagram"></span> lake_elementaita_manor</a></li>
                </ul>
            </div>

            <div class="location">
                <h4>Location</h4>                
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5801.276033859455!2d36.27456434423395!3d-0.46284414133206486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829a1ed0a0e2bd3%3A0xa21ff1784076f169!2sLake%20Elementaita%20Manor!5e0!3m2!1sen!2ske!4v1681126563802!5m2!1sen!2ske"                    
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

        <div class="copyright">
            <p>Lake Elementaita Manor. All right reserved &copy; 2023</p>
        </div>
    </footer>
  )
}
