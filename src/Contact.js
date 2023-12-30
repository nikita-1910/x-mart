import React from 'react'
import "./Contact.css";
import "./index.css"
const Contact = () => {
    return (
        <>
        <div class="contact" id="contact">
			<div class="mod">
			<h3>Contact us</h3>
			<p>if you have any question, please contact us:)</p>
				<div class="column">
					<div class="text-field-name-1">
							<form>
								<input type="text" class="text" value=" Enter your name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = ' Enter your name';}"/>
							</form>
					</div>
					<div class="text-field-email-1">
							<form>
								<input type="text" class="text" value="Enter your email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter your email';}"/>
							</form>
					</div>
					<div class="text-field-subject-1">
							<form>
								<input type="text" class="text" value=" Subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = ' Subject';}"/>
							</form>
					</div>
				</div>
				<div class="column">
						<div class="text-field-area-">
							<form>
								<textarea value="Message:" onfocus="if(this.value == 'Message') this.value='';" onblur="if(this.value == '') this.value='Message';">Message</textarea>
							</form>
						</div>
						<div class="but">
							<form>
								<input type="submit" value="send message"/>
							</form>
						</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
        </>
    )
}

export default Contact