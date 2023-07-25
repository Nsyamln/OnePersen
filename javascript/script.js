// Bagian Navbar...............................
        let nav = document.querySelector('nav');
        let dropdown = document.querySelector('.dropdown');
        let dropdownToggle =nav.querySelector("[data-action='dropdown-toggle']")
        let navToggle = nav.querySelector("[data-action='nav-toggle']")

        dropdownToggle.addEventListener('click',()=>{
            if (dropdown.classList.contains('show')){
                dropdown.classList.remove('show');
            }else{
                dropdown.classList.add('show');
            }
        })
        navToggle.addEventListener('click',()=>{
            if (nav.classList.contains('opened')){
                nav.classList.remove('opened');
            }else{
                nav.classList.add('opened');
            }
        });

        let picture_source =["../assets/blog1.jpg","../assets/blog2.jpg","../assets/blog3.jpg","../assets/blog4.jpg","../assets/blog5.jpg","../assets/blog6.jpg","../assets/blog7.jpg","../assets/blog8.jpg"]
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9334417aa8msh9f412d89e719a06p113c82jsnf90bb0dda442',
                    'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
                }
            };

            fetch('https://mental-health-info-api.p.rapidapi.com/news/thetimes', options)
                .then(response => response.json())
                .then(res => {
       
                        const b1 = document.getElementById('blog1');
                        const b2 = document.getElementById('blog2');
                        const b3 = document.getElementById('blog3');
                        const b4 = document.getElementById('blog4');
                        const b5 = document.getElementById('blog5');
                        const b6 = document.getElementById('blog6');
                        const b7 = document.getElementById('blog7');
                        const b8 = document.getElementById('blog8');
                        b1.className = 'content';
                        b2.className = 'content';
                        b3.className = 'content';
                        b4.className = 'content';
                        b5.className = 'content';
                        b6.className = 'content';
                        b7.className = 'content';
                        b8.className = 'content';

                    const data=res;
                    console.log(data);

                    for(let a=0;a<8;a++){
                        const pict = document.createElement('div');
                        const title = document.createElement('div');

                        const gambar = document.createElement("img");
                        gambar.src = picture_source[a];
                        
                        const isi =  document.createElement('a');
                        isi.innerText = data[a].title;
                        isi.className = "tittleblog";
                        isi.href = data[a].url;

                        const source = document.createElement('p');
                        source.className = 'source';
                        source.innerText = data[a].source;
                        
                        if(a===0){
                            pict.appendChild(gambar);
                            title.appendChild(isi);
                            title.appendChild(source);
                            b1.appendChild(pict);
                            b1.appendChild(title);
                            
                        }else if(a===1){
                            pict.appendChild(gambar);
                            title.appendChild(isi);
                            title.appendChild(source);
                            b2.appendChild(pict);
                            b2.appendChild(title);
                        }else if(a===2){
                            pict.appendChild(gambar);
                            title.appendChild(isi);
                            title.appendChild(source);
                            b3.appendChild(pict);
                            b3.appendChild(title);
                          
                        }else if(a===3){
                            pict.appendChild(gambar);
                            title.appendChild(isi);
                            title.appendChild(source);
                            b4.appendChild(pict);
                            b4.appendChild(title);
                          
                        }else if(a===4){
                            pict.appendChild(gambar);
                            title.appendChild(isi);
                            title.appendChild(source);
                            b5.appendChild(pict);
                            b5.appendChild(title);
                          
                        }else if(a===5){
                            pict.appendChild(gambar);
                            title.appendChild(isi);
                            title.appendChild(source);
                            b6.appendChild(pict);
                            b6.appendChild(title);
                        }else if(a===6){
                            pict.appendChild(gambar);
                            title.appendChild(isi);
                            title.appendChild(source);
                            b7.appendChild(pict);
                            b7.appendChild(title);
                        }else if(a===7){
                            pict.appendChild(gambar);
                            title.appendChild(isi);
                            title.appendChild(source);
                            b8.appendChild(pict);
                            b8.appendChild(title);
                        }

                    }
                    
                })
                .catch(err => console.error(err));