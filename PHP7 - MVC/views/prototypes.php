<!--
/**
 * Projeto Desenvolvido para a Atividade 2 - Formulário de Cadastro
 *
 * Curso Sistemas Interativos WEB
 *
 * Prof. Rudinei Goularte (rudinei@icmc.usp.br)
 *
 * ICMC USP 2018
 *
 * Esse arquivo utiliza o JavaScript com PROTOTYPES
 *
 * Preview Project: https://forms.galhardoo.com/version2
 *
 * Source Code: https://github.com/AlexGalhardo/forms.galhardoo.com-version2
 *
 * Alex Galhardo Vieira
 * Github: https://github.com/AlexGalhardo	
 * Email: aleexgvieira@gmail.com / alexgalhardo@usp.br
 * Site: https://galhardoo.com
 */
-->	
		<header>
			<h1>Forms Curriculum Version 2</h1>
			<br>
			<h2>Prototypes Version</h2>
			<br>
			<h4><a href="<?php echo BASE_URL; ?>">Classes Version</a></h4>
			<h4><a href="<?php echo BASE_URL; ?>objects">Objects Version</a><h4>
			<br>
		</header>

		<div class="div_home">
			
				<fieldset>
                   
                    <h3>Personal Data</h3>

					<span id="errorCompleteName"></span><br>
					<label for="completeName">Name: </label>
					<input type="text" id="completeName" name="name" placeholder="Digit your complete name">
					<br><br>

					<span id="errorEmail"></span><br>
					<label for="email">Email: </label><input name="email" type="email" placeholder="Digit your email" id="email"><br><br>

					<span id="errorCellphone"></span><br>
					<label for="cellphone">Cellphone: </label><input name="cellphone" type="number" placeholder="Digit your cellphone" id="cellphone"><br><br>

					<label>Gender:</label><br>
					<span id="errorGender"></span><br>
					<input type="radio" name="gender" value="Male"> Male<br>
					<input type="radio" name="gender" value="Female"> Female<br>
					<input type="radio" name="gender" value="Other"> Other
					
					<br><br>

					<span id="errorMaritalStatus"></span><br>
					<label>Marital Status</label>
					<select name="maritalStatus" id="maritalStatus">
						<option value=""></option>
						<option value="Single">Single</option>
						<option value="Married">Married</option>
						<option value="Divorced">Divorced</option>
						<option value="Dating">Dating</option>
						<option value="Widower">Widower</option>
					</select>
					
					<br><br>

                    <span id="errorNationality"></span><br>
					<label>Nationality:</label>
					<select name="nationality" id="nationality">
						<option value=""></option>
						<option value="Brazil">Brazil</option>
						<option value="Americano">American</option>
						<option value="Spain">Spain</option>
						<option value="England">England</option>
						<option value="Argentina">Argentina</option>
						<option value="Mexico">Mexico</option>
						<option value="Russia">Russia</option>
						<option value="India">India</option>
						<option value="France">France</option>
						<option value="Italy">Italy</option>
						<option value="Germany">Germany</option>
						<option value="Canada">Canada</option>
					</select>

					<br><br>
					
					<span id="errorNumberID"></span><br>
					<label for="numberID">NumberID:</label>
					<input type="number" name="numberID" placeholder="Enter your number ID" id="numberID" max="">
                    
  					<br><br>

                    <input class="input_verify_forms" type="submit" onclick="verifyFieldSetPersonal()" value="Verify Personal Forms">

				</fieldset>

				<br>

				<fieldset>

					<h3>Address Data</h3>

					<span id="errorStreet"></span><br>
					<label for="street">Street: </label>
					<input type="text" name="street" id="street" placeholder="Digit your street"><br><br>
					
					<span id="errorNeighborhood"></span><br>
					<label for="neighborhood">Neighborhood: </label>
					<input type="text" name="neighborhood" id="neighborhood" placeholder="Digit your neighborhood"><br><br>
					
					<span id="errorResidenceNumber"></span><br>
					<label for="residenceNumber">Residence Number: </label>
					<input type="number" name="residenceNumber" id="residenceNumber" placeholder="Digit your residence number">

                    <br><br>

					<input class="input_verify_forms" type="submit" onclick="verifyFieldSetAddress()" value="Verify Address Forms">

				</fieldset>

				<br>

				<fieldset>

					<h3>Job Interest</h3>

                    <span id="errorPostName"></span><br>

					<label>Post</label>

					<br>

					<input type="radio" value="Front-End Developer" name="post">
					 Front-End Developer<br>
					<input type="radio" value="Back-End Developer" name="post">
					 Back-End Developer<br>
					<input type="radio" value="FullStack Developer" name="post">
					 FullStack Developer<br>
					<input type="radio" value="Data Base Administrator" name="post">
					 Data Base Administrator<br>
					<input type="radio" value="Digital Marketing Analist" name="post">
					 Digital Marketing Analist<br>
					 <input type="radio" value="Designer" name="post">
					 Designer<br>
					<input type="radio" value="Human Resources" name="post">
					 Human Resources<br>
					<input type="radio" value="Financial administration" name="post">
					 Financial administration<br>
					<br><br>

                    <span id="errorPostExperience"></span><br>
					<label>Post Experience: </label>
					<br>
					<input type="radio" name="experience" value="Junior"> Junior<br>
					<input type="radio" name="experience" value="Pleno"> Pleno<br>
					<input type="radio" name="experience" value="Senior"> Senior<br>
					<input type="radio" name="experience" value="Yoda Master">  Yoda Master<br>
					
					<br><br>

                    <span id="errorInterestRegion"></span><br>
					<label for="interestRegion">Interest Region:  </label>
					<select name="interestRegion" id="interestRegion">
						<option value=""></option>
						<option value="SP">SP</option>
						<option value="RJ">RJ</option>
						<option value="MG">MG</option>
						<option value="PR">PR</option>
						<option value="SC">SC</option>
						<option value="AC">AC</option>
						<option value="AM">AM</option>
						<option value="RS">RS</option>
					</select>

					<br><br>

                    <span id="errorSalaryPretension"></span><br>
 					<label for="salaryPretension">Salary Pretension: $
					<input name="salaryPretension" id="salaryPretension" type="number" placeholder="Digit a integer number"> / month
                    
                    <br><br>

					<input class="input_verify_forms" type="submit" onclick="verifyFieldSetJobInterest()" value="Verify Interest Forms">

				</fieldset>

				<br>

				<fieldset id="fieldset_education">

					<h3>Education</h3>

					<label>Academic Education</label><br>

					<span id="errorSchooling"></span><br>

					<input type="radio" name="schooling" value="Incomplete High School" id="incompleteHighSchool" onclick="hiddenEducationDiv()">  Incomplete High School <br>

					<input type="radio" name="schooling" value="Complete High School" id="completeHighSchool" onclick="hiddenEducationDiv()">  Complete High School<br>

					<input type="radio" name="schooling" value="Incomplete University" onclick="showEducationDiv()">  Incomplete University<br>

					<input type="radio" name="schooling" value="Studying at University" onclick="showEducationDiv()">  Studying at University<br>

					<input type="radio" name="schooling" value="Complete University" onclick="showEducationDiv()">  Complete University Degree<br>

					<input type="radio" name="schooling" value="Complete Master Degree" onclick="showEducationDiv()">  Complete Master Degree</option><br>

					<input type="radio" name="schooling" value="Doctorate Degree" onclick="showEducationDiv()">  Doctorate Degree

					<br><br>

					<div id="div_education" hidden>

						<span id="errorCourseName"></span><br>
						<label>Course Name: </label>
						<input type="text" placeholder="Digit your course name" name="courseName" id="courseName"><br><br>

	                    <span id="errorInstitutionName"></span><br>
						<label>Institution Name: </label>
						<input type="text" placeholder="Digit your institution name" name="institutionName" id="institutionName"><br><br>

					</div>

					<span id="errorGraduate"></span>
					<br>
					<label for="graduate">University Graduate: </label>
					
					<select name="graduate" id="graduate">
						<option value=""></option>
						<option value="2018">2023</option>
						<option value="2017">2022</option>
						<option value="2016">2021</option>
						<option value="2015">2020</option>
						<option value="2014">2019</option>
						<option value="2018">2018</option>
						<option value="2017">2017</option>
						<option value="2016">2016</option>
						<option value="2015">2015</option>
						<option value="2014">2014</option>
						<option value="2013">2013</option>
						<option value="2012">2012</option>
						<option value="2011">2011</option>
						<option value="2010">2010</option>
						<option value="2009">2009</option>
						<option value="2008">2008</option>
						<option value="2007">2007</option>	
					</select>
				    
				    <br><br>

					<input class="input_verify_forms" type="submit" onclick="verifyFieldSetEducation()" value="Verify Education Forms">

					<br><br>

				</fieldset>

				<br>

				<fieldset id="fieldset_professional_experience">

					<h3>Professional Experiences</h3>

					<input type="radio" name="hasExperience" value="Has Professional Experience" id="hasExperience" onclick="showButtonAddProfessionalExperience()"> Has Professional Experience
					
					<input type="radio" name="hasExperience" value="Doesn't Has Professional Experience" onclick="hiddenButtonAddProfessionalExperience()" id="doesNotHasExperience" checked> Doesn't Has Professional Experience

					<div id="button_add_professional_exp" hidden>
						<br><br>
						<input onclick="showDivAddExperienceData()" type="button" value="Add Professional Experience"></input>
					</div>
					
					<div id="div_has_professional_exp" hidden>
						<br><br>
						<hr>
						<span id="errorCompanyName"></span><br>
						<label>Company Name:</label>
						<input type="text" placeholder="Digit company name" id="companyName" name="companyName">
						<br><br>

						<strong>Start:</strong> Month: 
						<select name="monthStart">
							<option value="Janeiro">Janeiro</option>
							<option value="Feveiro">Feveiro</option>
							<option value="Março">Março</option>
							<option value="Abril">Abril</option>
							<option value="Maio">Maio</option>
							<option value="Junho">Junho</option>
							<option value="Julho">Julho</option>
							<option value="Agosto">Agosto</option>
							<option value="Setembro">Setembro</option>
							<option value="Outubro">Outubro</option>
							<option value="Novembro">Novembro</option>
							<option value="Dezembro">Dezembro</option>	
						</select>
						Year:
						<select name="yearStart">
							<option value="2018">2018</option>
							<option value="2017">2017</option>
							<option value="2016">2016</option>
							<option value="2015">2015</option>
							<option value="2014">2014</option>
							<option value="2013">2013</option>
							<option value="2012">2012</option>
							<option value="2011">2011</option>
							<option value="2010">2010</option>
							<option value="2009">2009</option>
							<option value="2008">2008</option>
							<option value="2007">2007</option>	
						</select>
						<label> <br><br>
						<strong>End:</strong>
						<select name="endMonth">
							<option value="Janeiro">Janeiro</option>
							<option value="Feveiro">Feveiro</option>
							<option value="Março">Março</option>
							<option value="Abril">Abril</option>
							<option value="Maio">Maio</option>
							<option value="Junho">Junho</option>
							<option value="Julho">Julho</option>
							<option value="Agosto">Agosto</option>
							<option value="Setembro">Setembro</option>
							<option value="Outubro">Outubro</option>
							<option value="Novembro">Novembro</option>
							<option value="Dezembro">Dezembro</option>		
						</select>
						Year:
						<select name="endYear">
							<option value="2018">2018</option>
							<option value="2017">2017</option>
							<option value="2016">2016</option>
							<option value="2015">2015</option>
							<option value="2014">2014</option>
							<option value="2013">2013</option>
							<option value="2012">2012</option>
							<option value="2011">2011</option>
							<option value="2010">2010</option>
							<option value="2009">2009</option>
							<option value="2008">2008</option>
							<option value="2007">2007</option>		
						</select>

						<br><br>
						<span id="errorBusinessSegment"></span><br>
						<label>Business Segment</label>:<br>
						<input type="radio" value="Tecnologia e Informática" name="businessSegment">  Technology <br>
						<input type="radio" value="Human Resources" name="businessSegment">  Human Resources <br>
						<input type="radio" value="Varejo de Produtos Físicos" name="businessSegment">  Retail of Physical Products <br>
						<input type="radio" value="Marketing Digital" name="businessSegment">  Digital Marketing <br>
						<input type="radio" value="Food Trade" name="businessSegment">  Food Trade <br>
						<input type="radio" value="Entertainment" name="businessSegment">  Entertainment <br>
						<input type="radio" value="General Services" name="businessSegment">  General Services

						<br><br>
						<span id="errorPositionHeld"></span><br>
						<label>Position Held:</label>
						<input type="text" placeholder="Digit your position held in this experience" id="positionHeld" name="positionHeld"><br><br>

						<span id="errorJobResponsabilities"></span><br>
						<label>Enter your main duties and responsibilities in the position held: </label><br>
						<textarea rows="10" cols="70" name="jobResponsabilities" id="jobResponsabilities"></textarea>
						<br><br>
						<input type="submit" onclick="hiddenCompanyExperience()" value="Delete This Experience">

						<hr>

						<input class="input_verify_forms" type="submit" onclick="verifyFieldsetProfessionalExperience()" value="Verify Professional Forms">

					</div>

				</fieldset>
				
				<br><br>

				<button onclick="verifyCurriculumForms()" class="button-app-main-page">Verify Forms JavaScript</button>

				<div id="div_data_send"></div>

		        <h4 style="text-align: center;"><a target="_blank" href="<?php echo BASE_URL; ?>assets/js/prototypes.js">See JavaScript Prototypes Code</a></h4>
		        <br>

			<h4>
			<a href="https://www.icmc.usp.br/">ICMC USP 2018</a>

			<br><br>

			© 2018 <a href="https://galhardoo.com">Alex Galhardo</a>

			<br><br>

			Versão 2.0
		
			<br>
			<br>

			<a href="https://github.com/AlexGalhardo/forms.galhardoo.com-version2">Site made with PHP7 & MVC & POO & MySQL</a>
		</h4>
		
		<br>

		<script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/prototypes.js"></script>

	</body>

</html>