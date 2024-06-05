function toggleSearch() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}



/* 백엔드 구현 후 백엔드의 API를 프론트엔드로 가져요기? */

function showUserProfile(userId) {
    // 임시 더미 데이터
    const data = {
        profile_img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuLUrM%2FbtsHEqXxedM%2Fr9yMgi98uXY17KOhGkORwk%2Fimg.png",
        nickname: "홍길동",
        age: "25",
        village: "서울",
        profile: "안녕하세요, 저는 게임을 좋아하는 홍길동입니다!",
        games: [
            { name: "사이퍼즈", imageUrl: "https://example.com/cyphers.jpg" },
            { name: "롤", imageUrl: "https://example.com/leagueoflegends.jpg" }
        ],
        tierImage: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuLUrM%2FbtsHEqXxedM%2Fr9yMgi98uXY17KOhGkORwk%2Fimg.png",
        friend_list: [
            { id: "friend1", name: "이강인" },
            { id: "friend2", name: "손흥민" }
        ]
    };
    
    /* const data = new XMLHttpRequest();
    
    data.open('GET', `http://your-backend-api.com/user/${userId}`, true);
    
    data.onload = function() {
        if (data.status === 200) {
            const data = JSON.parse(data.responseText);  */

    // 데이터를 HTML에 적용하는 부분
    const profile_img = document.getElementById('profile_img');
    profile_img.src = data.profile_img;

    const nickname = document.getElementById('nickname');
    nickname.textContent = data.nickname;

    const age = document.getElementById('age');
    age.textContent = data.age;

    const village = document.getElementById('village');
    village.textContent = data.village;

    const profile = document.querySelector('.profile');
    profile.textContent = data.profile;

    const gamePage = document.querySelector('.gamePage');  /* DB에 등록된 게임이 이미지 일 경우 */
    gamePage.innerHTML = data.games.map(game => `<img src="${game.imageUrl}" alt="${game.name}">`).join('');

    const tier = document.querySelector('.tier');
    tier.innerHTML = `<img src="${data.tierImage}" alt="티어 이미지">`;

    const headerProfileImage = document.getElementById('headerProfileImage');
    headerProfileImage.src = data.profile_img;
    
    // 친구 목록 추가
    document.querySelector('.friend_list').innerHTML = data.friend_list.map(friend => `
            <div class="friend-item">
                <p>${friend.name}</p>
            </div>
        `).join('');

    // 프로필 이미지를 클릭했을 때 mypage.html로 이동하는 이벤트 추가
    profile_img.addEventListener('click', function() {
        window.location.href = "mypage.html";
    });
    
} /* else {
            console.error('Request failed. Status:', data.status);
        }
    };
    
    data.send();
}  */

/* 임시 더미데이터 출력하기  */
function getUserIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// 페이지가 로드될 때 사용자의 ID를 가져와서 프로필을 표시하는 함수 호출
window.onload = function() {
    const userId = getUserIdFromURL();
    showUserProfile(userId);
}
