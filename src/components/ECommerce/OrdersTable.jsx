import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { visuallyHidden } from "@mui/utils";
import PropTypes from "prop-types";
import { ORDERS } from "../../constants/dashboardData";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import HistoryIcon from "@mui/icons-material/History";

import { DUMMY_PROJECTS, DUMMY_STATUSES } from "../../constants/dashboardData";
import { debounce } from "lodash";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "complete":
      return "success";
    case "in progress":
      return "warning";
    case "pending":
      return "info";
    case "approved":
      return "success";
    case "rejected":
      return "error";
    case "cancelled":
      return "default";
    case "on hold":
      return "warning";
    default:
      return "default";
  }
};

const getUserInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};

const headCells = [
  { id: "orderId", numeric: false, disablePadding: true, label: "Order ID" },
  { id: "customer", numeric: false, disablePadding: false, label: "User" },
  { id: "project", numeric: false, disablePadding: false, label: "Project" },
  { id: "address", numeric: false, disablePadding: false, label: "Address" },
  { id: "date", numeric: false, disablePadding: false, label: "Date" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
  { id: "actions", numeric: false, disablePadding: false, label: "" },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all orders" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

function EnhancedTableToolbar(props) {
  const {
    numSelected,
    onFilterClick,
    filterCount,
    onResetFilters,
    onDelete,
    searchText,
    onSearchChange,
  } = props;

  return (
    <Toolbar
      sx={[
        { pl: { sm: 2 }, pr: { xs: 1, sm: 1 } },
        {
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "space-between",
        },
      ]}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {numSelected > 0 ? (
          <>
            <Typography variant="body2" fontWeight="medium">
              {numSelected} selected
            </Typography>
            <Tooltip title={`Delete ${numSelected} selected`}>
              <IconButton onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="Filter list">
              <IconButton onClick={onFilterClick}>
                <Badge badgeContent={filterCount} color="primary">
                  <FilterListIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            {filterCount > 0 && (
              <Tooltip title="Reset filters">
                <IconButton onClick={onResetFilters}>
                  <HistoryIcon />
                </IconButton>
              </Tooltip>
            )}
          </>
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          label="Search by customer name"
          size="small"
          value={searchText}
          onChange={onSearchChange}
          variant="outlined"
          sx={{ width: 300 }}
        />
      </Box>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  filterCount: PropTypes.number.isRequired,
  onResetFilters: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function OrdersTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("orderId");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const dense = true;
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const [filters, setFilters] = React.useState({ status: "", project: "" });
  const [filterModalOpen, setFilterModalOpen] = React.useState(false);
  const [appliedFilters, setAppliedFilters] = React.useState({
    status: "",
    project: "",
  });
  const [data, setData] = React.useState(ORDERS);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [debouncedSearchText, setDebouncedSearchText] = React.useState("");
  const [statusChangeModalOpen, setStatusChangeModalOpen] =
    React.useState(false);
  const [currentOrderId, setCurrentOrderId] = React.useState(null);
  const [newStatus, setNewStatus] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [individualDeleteConfirmOpen, setIndividualDeleteConfirmOpen] =
    React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredOrders.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
    setFilterModalOpen(false);
  };

  const resetFilters = () => {
    setFilters({ status: "", project: "" });
    setAppliedFilters({ status: "", project: "" });
  };

  const handleDelete = () => {
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    setData((prevData) =>
      prevData.filter((order) => !selected.includes(order.id))
    );
    setSelected([]);
    setDeleteConfirmOpen(false);
  };

  const cancelDelete = () => {
    setDeleteConfirmOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    debouncedSearch(event.target.value);
  };

  const debouncedSearch = React.useCallback(
    debounce((value) => {
      setDebouncedSearchText(value);
    }, 300),
    []
  );

  const handleMenuClick = (event, orderId) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setCurrentOrderId(orderId);
    const currentOrder = data.find((order) => order.id === orderId);
    setNewStatus(currentOrder.status);
  };

  const handleMenuClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleStatusChangeClick = (event) => {
    event.stopPropagation();
    setStatusChangeModalOpen(true);
    handleMenuClose(event);
  };

  const confirmStatusChange = () => {
    setData((prevData) =>
      prevData.map((order) =>
        order.id === currentOrderId ? { ...order, status: newStatus } : order
      )
    );
    setStatusChangeModalOpen(false);
    setCurrentOrderId(null);
    setNewStatus("");
  };

  const cancelStatusChange = () => {
    setStatusChangeModalOpen(false);
    setCurrentOrderId(null);
    setNewStatus("");
  };

  const handleIndividualDeleteClick = (event, orderId) => {
    event.stopPropagation();
    setCurrentOrderId(orderId);
    setIndividualDeleteConfirmOpen(true);
  };

  const confirmIndividualDelete = () => {
    const newData = data.filter(
      (order) => order.orderId !== currentOrderId.toString()
    );
    console.log("data", data);
    console.log("currentOrderId", currentOrderId, newData);

    setData(newData);
    setIndividualDeleteConfirmOpen(false);
    setCurrentOrderId(null);
  };

  const cancelIndividualDelete = () => {
    setIndividualDeleteConfirmOpen(false);
    setCurrentOrderId(null);
  };

  const filteredOrders = data.filter((order) => {
    const statusMatch =
      appliedFilters.status === "" ||
      appliedFilters.status === "All" ||
      order.status.toLowerCase() === appliedFilters.status.toLowerCase();
    const projectMatch =
      appliedFilters.project === "" ||
      appliedFilters.project === "All" ||
      order.project.toLowerCase() === appliedFilters.project.toLowerCase();
    const searchMatch =
      debouncedSearchText === "" ||
      order.customer.toLowerCase().includes(debouncedSearchText.toLowerCase());

    if (statusMatch && projectMatch && searchMatch) {
      return true;
    }
    return false;
  });

  console.log("filteredOrders", filteredOrders, data, currentOrderId);

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - filteredOrders.length)
      : 0;

  const visibleRows = React.useMemo(
    () =>
      [...filteredOrders]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, filteredOrders]
  );

  const filterCount = Object.values(appliedFilters).filter(
    (value) => value !== "" && value !== "All"
  ).length;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          onFilterClick={() => setFilterModalOpen(true)}
          filterCount={filterCount}
          onResetFilters={resetFilters}
          onDelete={handleDelete}
          searchText={searchText}
          onSearchChange={handleSearchChange}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filteredOrders.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                console.log("row", row);

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Typography variant="body2" fontWeight="medium">
                        #{row.orderId}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            fontSize: "0.875rem",
                            bgcolor: "primary.main",
                            color: "white",
                          }}
                        >
                          {getUserInitials(row.customer)}
                        </Avatar>
                        <Typography variant="body2">{row.customer}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body2" color="text.secondary">
                        {row.project}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          maxWidth: 200,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {row.address}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body2" color="text.secondary">
                        {row.date}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Chip
                        label={row.status}
                        color={getStatusColor(row.status)}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          height: 24,
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Tooltip title="More actions">
                        <IconButton
                          onClick={(event) => handleMenuClick(event, row.id)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleStatusChangeClick}>
                          Change Status
                        </MenuItem>
                        <MenuItem
                          onClick={(event) =>
                            handleIndividualDeleteClick(event, row.orderId)
                          }
                        >
                          Delete Order
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={filteredOrders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          showFirstButton
          showLastButton
          labelRowsPerPage="Rows per page:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
          }
        />
      </Paper>
      <Modal
        open={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        aria-labelledby="filter-modal-title"
        aria-describedby="filter-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="filter-modal-title" variant="h6" component="h2">
            Filter Orders
          </Typography>
          <TextField
            select
            label="Status"
            value={filters.status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            <MenuItem value="All">All</MenuItem>
            {DUMMY_STATUSES.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Project"
            value={filters.project}
            onChange={(e) => handleFilterChange("project", e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            <MenuItem value="All">All</MenuItem>
            {DUMMY_PROJECTS.map((project) => (
              <MenuItem key={project} value={project}>
                {project}
              </MenuItem>
            ))}
          </TextField>

          <Button
            onClick={applyFilters}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Apply Filters
          </Button>
        </Box>
      </Modal>
      <Modal
        open={deleteConfirmOpen}
        onClose={cancelDelete}
        aria-labelledby="delete-confirm-title"
        aria-describedby="delete-confirm-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="delete-confirm-title" variant="h6" component="h2">
            Confirm Delete
          </Typography>
          <Typography id="delete-confirm-description" sx={{ mt: 2 }}>
            Are you sure you want to delete the {selected.length} selected
            orders?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button onClick={cancelDelete} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button onClick={confirmDelete} variant="contained" color="error">
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={statusChangeModalOpen}
        onClose={cancelStatusChange}
        aria-labelledby="status-change-title"
        aria-describedby="status-change-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="status-change-title" variant="h6" component="h2">
            Change Order Status
          </Typography>
          <TextField
            select
            label="New Status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            {DUMMY_STATUSES.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button onClick={cancelStatusChange} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button
              onClick={confirmStatusChange}
              variant="contained"
              color="primary"
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={individualDeleteConfirmOpen}
        onClose={cancelIndividualDelete}
        aria-labelledby="individual-delete-confirm-title"
        aria-describedby="individual-delete-confirm-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="individual-delete-confirm-title"
            variant="h6"
            component="h2"
          >
            Confirm Delete
          </Typography>
          <Typography id="individual-delete-confirm-description" sx={{ mt: 2 }}>
            Are you sure you want to delete the order?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button onClick={cancelIndividualDelete} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button
              onClick={confirmIndividualDelete}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
