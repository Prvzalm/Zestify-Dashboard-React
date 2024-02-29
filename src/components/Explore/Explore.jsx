import { useState } from "react";
import "./Explore.css";
import { FaAngleLeft } from "react-icons/fa6";
import { addDays } from "date-fns";
import { IoFilter } from "react-icons/io5";
import { DateRangePicker } from "react-date-range";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoEye } from "react-icons/go";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router-dom";
import PageHeader from "../Header/Header";

const CustomButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        color: "#4a5568",
        border: "1px solid #4a5568",
        borderRadius: "8px",
      }}
    >
      <BsCalendarDateFill />
      <span style={{ marginLeft: "0.5rem", textTransform: "none" }}>
        Date Range
      </span>
      <MdKeyboardArrowDown />
    </Button>
  );
};

const Explore = () => {
  const navigate = useNavigate();
  const [hasNotification, setHasNotification] = useState(true);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSelect = (ranges) => {
    console.log(ranges); // { selection: { startDate, endDate } }
    setState([ranges.selection]);
    setAnchorEl(null); // Close the popover after selecting the date range
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="explore-container p-0 sm:ml-60">
      {/* Use the PageHeader component */}
      <PageHeader
        title="Explore"
        searchQuery=""
        setSearchQuery={() => {}}
        hasNotification={hasNotification}
        setHasNotification={setHasNotification}
      />

      {/* Back Button */}
      <div className="back-button flex items-center text-2xl font-bold p-6">
        <button
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <FaAngleLeft />
          <span className="ml-1">Back</span>
        </button>
      </div>

      {/* Additional Divs below Eagle View */}
      <div className="exploreContainer mx-5 bg-[#fff]">
        <div className="exploreHeading text-2xl font-bold p-4">
          <h2>Eagle View</h2>
        </div>
        <div className="channelOptions flex place-content-between pt-5 px-6">
          <div className="chatLinks flex">
            <h3 className="mr-2 channel-heads">Chat Links:</h3>{" "}
            <p>https://t.me/+qCJbGLeN</p>
          </div>

          <div className="AgencyOptions flex text-neutral-600">
            <h3 className="mr-2 channel-heads">Overview Request:</h3>
            <span className="eye-icon">
              {/* Disable the icon if there are no notifications */}
              <GoEye />
            </span>
          </div>
          <div className="filterOptions flex">
            <div className="filterIcon channel-heads mr-2">
              <IoFilter />
              Filter:
            </div>
            <div className="date-range px-1">
              <CustomButton onClick={handleClick} />
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <DateRangePicker
                  onChange={handleSelect}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={1}
                  ranges={state}
                  direction="horizontal"
                />
              </Popover>
            </div>
          </div>
        </div>
        <div className="channelResult px-5 pb-3">
          <table className="channel-table">
            <thead>
              <tr className="exploreChannels">
                <th>Date</th>
                <th>Total Members</th>
                <th>Members Join</th>
                <th>Members Left</th>
              </tr>
            </thead>
            <tbody>
              <tr className="channel-numbers">
                <td>12/02/2024</td>
                <td>1000</td>
                <td>+100</td>
                <td>-10</td>
              </tr>

              <tr className="channel-numbers">
                <td>13/02/2024</td>
                <td>1000</td>
                <td>+100</td>
                <td>-10</td>
              </tr>

              <tr className="channel-numbers">
                <td>14/02/2024</td>
                <td>1000</td>
                <td>+100</td>
                <td>-10</td>
              </tr>

              <tr className="channel-numbers">
                <td>15/02/2024</td>
                <td>1000</td>
                <td>+100</td>
                <td>-10</td>
              </tr>

              <tr className="channel-numbers">
                <td>16/02/2024</td>
                <td>1000</td>
                <td>+100</td>
                <td>-10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Explore;
