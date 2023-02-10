const users = [
    {
        name: 'Alexander Greek',
        age: '21',
        id: 'B20DCVT001',
        image: './asset/user1.webp',
        dev: 20,
        debug: 40,
        create: 50,
        manager: 10,
        dev_s: 70,
        debug_s: 55,
        create_s: 26,
        manager_s: 80,
        present_task: 'find documentations',
        git_link: 'https://github.com/emTuantapCode/',
        profile_link: 'https://github.com/emTuantapCode/profile',
        contribute: '20%'
    },
    {
        name: 'Anne Hebrew',
        age: '18',
        id: 'B20DCVT002',
        image: './asset/user2.jpeg',
        dev: 25,
        debug: 40,
        create: 20,
        manager: 55,
        dev_s: 60,
        debug_s: 55,
        create_s: 80,
        manager_s: 20,
        present_task: 'emplemen powerpoint',
        git_link: 'https://github.com/emTuantapCode/',
        profile_link: 'https://github.com/emTuantapCode/profile',
        contribute: '10%'
    },
    {
        name: 'Lucas German',
        age: '21',
        id: 'B20DCVT003',
        image: './asset/user3.jpeg',
        dev: 8,
        debug: 40,
        create: 50,
        manager: 10,
        dev_s: 90,
        debug_s: 55,
        create_s: 26,
        manager_s: 80,
        present_task: 'presenter',
        git_link: 'https://github.com/emTuantapCode/',
        profile_link: 'https://github.com/emTuantapCode/profile',
        contribute: '20%'
    },
    {
        name: 'Lily Latin',
        age: '21',
        id: 'B20DCVT004',
        image: './asset/user4.webp',
        dev: 20,
        debug: 40,
        create: 50,
        manager: 10,
        dev_s: 70,
        debug_s: 55,
        create_s: 26,
        manager_s: 80,
        present_task: 'find documentations',
        git_link: 'https://github.com/emTuantapCode/',
        profile_link: 'https://github.com/emTuantapCode/profile',
        contribute: '20%'
    },
    {
        name: 'Oliver Shark',
        age: '21',
        id: 'B20DCVT005',
        image: './asset/user5.webp',
        dev: 30,
        debug: 40,
        create: 10,
        manager: 10,
        dev_s: 65,
        debug_s: 55,
        create_s: 80,
        manager_s: 80,
        present_task: 'prepare content',
        git_link: 'https://github.com/emTuantapCode/',
        profile_link: 'https://github.com/emTuantapCode/profile',
        contribute: '10%'
    },
    {
        name: 'Charlie Putin',
        age: '23',
        id: 'B20DCVT006',
        image: './asset/user6.webp',
        dev: 20,
        debug: 8,
        create: 50,
        manager: 10,
        dev_s: 70,
        debug_s: 90,
        create_s: 26,
        manager_s: 80,
        present_task: 'find documentations',
        git_link: 'https://github.com/emTuantapCode/',
        profile_link: 'https://github.com/emTuantapCode/profile',
        contribute: '12%'
    }
]

const root = document.getElementById('alalytic')


const replace = (user) => {
    console.log(user);
    let html = `
    <div class="flex">
        <img class="w-[18%] h-[20%] border-4 border-[#0d660dd1]" src="${user.image}"
            alt="user">
        <div class="ml-[30px] w-full">
            <div class="flex w-full">
                <div class="skill-name md:min-w-[150px]">Dev skills</div>
                <div class="hidden md:block skill-level w-[350px] bg-[#0d660dd1] my-[7px] mr-[${user.dev}%]">
                </div>
                <div class="figure justify-end ml-[16px]">${user.dev_s}</div>
            </div>
            <div class="flex">
                <div class="skill-name md:min-w-[150px]">Debug skills</div>
                <div class="hidden md:block skill-level w-[350px] bg-[#0d660dd1] my-[7px] mr-[${user.debug}%]">
                </div>
                <div class="figure justify-end ml-[16px]">${user.debug_s}</div>
            </div>
            <div class="flex">
                <div class="skill-name md:min-w-[150px]">Creative skills</div>
                <div class="hidden md:block skill-level w-[350px] bg-[#0d660dd1] my-[7px] mr-[${user.create}%]">
                </div>
                <div class="figure justify-end ml-[16px]">${user.create_s}</div>
            </div>
            <div class="flex">
                <div class="skill-name md:min-w-[150px]">Manager skills</div>
                <div class="hidden md:block skill-level w-[350px] bg-[#0d660dd1] my-[7px] mr-[${user.manager}%]">
                </div>
                <div class="figure justify-end ml-[16px]">${user.manager_s}</div>
            </div>
            <div class="flex mt-[12px]">
                <div class="skill-name min-w-[50px] md:min-w-[150px]">Name</div>
                <div class="">${user.name}</div>
            </div>
            <div class="flex">
                <div class="skill-name min-w-[50px] md:min-w-[150px]">Age</div>
                <div class="">${user.age}</div>
            </div>
            <div class="flex">
                <div class="skill-name min-w-[50px] md:min-w-[150px]">ID</div>
                <div class="">${user.id}</div>
            </div>
        </div>
    </div>
    <div>
        <p class="text-[20px] font-semibold">
            Contributions:
        </p>
        <span>Github links:</span>
        <a class="font-bold text-[#E30613]" href="${user.git_link}">${user.git_link}</a>
        <br>
        <span>Profile links:</span>
        <a class="font-bold text-[#E30613]" href="${user.profile_link}">${user.profile_link}</a>
        <br>
        <span>Present task: ${user.present_task}</span>
        <br>
        <span>Contributions for app: ${user.contribute}</span>
    </div>
    `
    root.innerHTML = html
}
replace(users[0])
const handleChange = (index) => {
    let user = users[index]
    replace(user)
}