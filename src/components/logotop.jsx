import '../components/logotop.css';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";




const Logotop = () => {


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
          
            English
          </div>
          <div className="item">
           
          </div>
          <div className="item">
            
          </div>
          <div className="item">
           
            <div className="counter">1</div>
          </div>
          <div className="item">
            
            <div className="counter">2</div>
          </div>
          <div className="item">
           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Logotop;