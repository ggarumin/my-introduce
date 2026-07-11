const introduceData = {

    꿈: [
        "전 게임개발자가 되고 싶습니다.",
        "옛날부터 게임에 많은 애정이 있었고, 진로를 게임 쪽으로 정하고 싶었습니다.",
        "첫 컴퓨터 한 번 만지작한 뒤로 엄청 재밌어서 진로 정할 시기에 컴퓨터 관련 일을 하고 싶었어요.",
        "근데 그 때 게임을 워낙 좋아했어서 프로게이머는 어떨까 싶었는데..",
        "게임 실력도 좋은편은 아니고, 왠지 모를 개발의 욕망이 생겨버려서 게임 만들기로 했어요",
        "만약 개발에 흥미가 없었다면 진짜로 프로게이머 노렸을지도.."
    ],
       
   좋아하는거: [
     "1순위로 게임! 게임을 제일 좋아합니다.",
      "게임 재밌잖아요? 혼자 집에 있음 다들 심심하다는데 전 게임만 해도 좋아해서요.", 
      "그래도 저에겐 꽤나 중요한 거거든요.",
      "안 좋은 일이 있을 때마다 집중하면 시간이 순식간에 지나가고, 기억을 안 할 수 있으니 좋더라구요.",
      "저의 멘탈 회복용이기도 해요~ 그래서 게임을 제일 좋아합니다.",
      "제일 좋아하는 게임은 오버워치, 발로란트 같은 fps와 슬더스 같은 턴제 게임이에요.",
      "다른거는 노래나 그림을 좋아합니다 근데 그림은 보는 것을 좋아하는 ㅎ.",
      "하고 싶을때 혼자 연습해볼까 싶어요.",
      "좋아하는 색깔을 하얀색과 검은색이에요. 간지 나잖아요.",
   ],

    싫어하는거: [
      "담배, 벌레, 토마토를 싫어해요.",
      "토마토 시큼하고 그 특유의 향 때문에 먹기가 힘들어서ㅋㅋ",
      "벌레는  오월이가 데려왔는지 집 거실에 엄청 큰 창문 앞 정확히 중간에 애벌레가 똭!!! 있었던 일과 아는 누나 집 화장실을 들어갔다 나와서 불 끄려고 스위치에 손을 올렸는데 천장에 애벌레가 떨어져서 손에 슈퍼히어로 랜딩 했던 일 이후로 싫어하게 된거 같아요.",
      "물론 거실 애벌레가 제일 큰 이유긴 해요.",
      "솜인줄 알았는데 초록색 애벌레였던게 좀 충격이라.",
      "담배는 몸에도 안 좋고, 길에서 담배 피는 사람들한테 강제테러 당해서 싫어요."
    ],
       
    하고싶은거: [
      "게임개발을 하고 싶은데 아직 실력이 부족해서.. 공부하고 숙련 되면 인디게임 개발하고 싶어요.",
      "너무 낭만적인 이야기일 수도 있고, 실현 가능성이 적지만 이거 때문에 진로를 정한거니까요.",
      "개인적으로 유튜브도 해보고 싶어요.",
      "평범한 취미로 하는거죠. 하다가 좀 재밌는데, 잘되네 싶으면 열심히 해볼려고요.",
      "한다면 게임 유튜버를 할거 같아요. 근디 게임 개발을 주업으로 하는 게임 유튜버는 왜 잘 없는지 모르겠네요? 성우분도 계시던데.",
    ],

    계획: [
        "고등학생 때까지는 열심히 공부해보다가 게임을 하나 완성해서 게임 플랫폼에 올려볼 거에요. steam 같은 곳이요.",
        "처음 올렸던 게임은 사실상 학원 선생님이 거의 다 해주셔서. 저의 힘으로만 게임을 만들어 보고 싶어요.",
        "일러스트는 제가 못 그리는데, 누나가 그려준대요~^^. 그래서 만들어 볼 순 있을 것 같은데.. 일러스트만 문제가 아니라섴ㅋㅋ.",
        "고등학교는 일반고와 정보고랑 고민 중이에요. 일반고를 가서 독학 할까 했는데.. 코딩을 독학으로 한다고..? 생각해보니 안 되겠더라고요ㅇㅇ. ",
        "대학교은 고등학교를 졸업하면 바로 청강대부터 들어가고 싶을 것 같아요.",
        "청강대 말고도 다른 대학들도 생각하고 있긴 하지만 지금은 청강대를 제일 가고 싶네요.",
        "회사 취업은 사실 잘 모르겠어요. 들어가고 싶은 회사랄게 없어서요. 굳이 생각해보면 네오위즈? 넥슨? 아닐까요",
        "마음 같아선 1인 개발하고 싶은데 그게 마냥 쉬운건 아니니까요..",
    ],
};


const tabs = document.querySelectorAll(".tab");
const description = document.querySelector(".first_introduce_text");

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        tabs.forEach((t) => {
            t.classList.remove("selected");
        });

        tab.classList.add("selected");

        const clickedTabName = tab.textContent.trim();

        const text = introduceData[clickedTabName]
            .map(item => `<p>${item}</p>`)
            .join("\n");

        description.innerHTML = text;
    });
});

const cardpage = document.getElementById("card-page");
cardpage.addEventListener("click", function() {
    
})

async function getComment() {
    const response = await fetch("")
    const jsonData = await response.json();

    return jsonData;
}

console.log(getComment())

const pastComment = async (param) => {
    console.log(param);
    const res = await fetch("", {
        mathod: "POST",
        HEADERS: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(param),
    });
    return await res.json();
}