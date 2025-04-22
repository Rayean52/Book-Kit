const getStoredData = () => {
    const storedData = localStorage.getItem("readList");

    if (storedData) {
        const parsedData = JSON.parse(storedData);
        return parsedData;
    }
    else {
        return [];
    }
}

const setToDB = (id) => {
    const storedEachData = getStoredData();

    if (storedEachData.includes(id)){
        alert("This Book already added.!");
    }
    else{
        storedEachData.push(id);
        const finalData = JSON.stringify(storedEachData)
        localStorage.setItem("readList", finalData)
    }
}

export {setToDB}