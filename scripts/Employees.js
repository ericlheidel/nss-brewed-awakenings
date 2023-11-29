import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const employeeClicked = clickEvent.target

        let numberOfSales = 0

        if (employeeClicked.dataset.type === "employee") {
            for (const order of orders) {
                if (parseInt(employeeClicked.dataset.id) === order.employeeId) {
                    numberOfSales++
                }
            } window.alert(`${employeeClicked.dataset.name} has sold ${numberOfSales} products.`)
        }
            
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
                    data-type="employee"
                    data-id="${employee.id}"
                    data-name="${employee.name}"
                    >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

